package ch.ac.server.events.repositories;

import ch.ac.server.events.models.Event;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EventRepository {

    private DynamoDBMapper mapper;

    public EventRepository() {
        AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard()
                .withRegion(Regions.EU_CENTRAL_1)
                .build();
        mapper = new DynamoDBMapper(client);

    }

    public List<Event> findEvents(String dateFrom) {
        HashMap<String, String> nameMap = new HashMap<String, String>();
        nameMap.put("#date", "date");
        Map<String, AttributeValue> eav = new HashMap<String, AttributeValue>();
        eav.put(":date", new AttributeValue().withS(dateFrom));

        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression()
                .withFilterExpression("#date > :date")
                .withExpressionAttributeNames(nameMap)
                .withExpressionAttributeValues(eav);

        return mapper.scan(Event.class, scanExpression);
    }

}
