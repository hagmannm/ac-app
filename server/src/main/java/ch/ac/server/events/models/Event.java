package ch.ac.server.events.models;

import com.amazonaws.services.dynamodbv2.datamodeling.*;
import com.amazonaws.services.dynamodbv2.document.utils.ValueMap;

import java.util.Map;

@DynamoDBTable(tableName = "Event")
public class Event {

    private String date;
    private String description;
    private String location;
    private String startTime;
    private String endTime;
    private Map<String, Map<String, String>> singers;

    // Partition key
    @DynamoDBHashKey(attributeName = "date")
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    // Sort key
    @DynamoDBRangeKey(attributeName = "startTime")
    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    @DynamoDBAttribute(attributeName = "endTime")
    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    @DynamoDBAttribute(attributeName = "location")
    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @DynamoDBAttribute(attributeName = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @DynamoDBAttribute(attributeName = "singers")
    public Map<String, Map<String, String>> getSingers() {
        return singers;
    }

    public void setSingers(Map<String, Map<String, String>> singers) {
        this.singers = singers;
    }

    @DynamoDBIgnore
    public void updateSinger(String userId, String comment, String state) {
        // TODO
    }

    @Override
    public String toString() {
        return "Event date: " + date + ", start time: " + startTime + ", end time: " + endTime + ", location: " + location
                + ", description: " + description;
    }
}
