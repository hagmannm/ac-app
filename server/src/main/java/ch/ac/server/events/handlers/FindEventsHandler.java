package ch.ac.server.events.handlers;

import ch.ac.server.events.models.Event;
import ch.ac.server.events.repositories.EventRepository;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;

import java.util.List;

public class FindEventsHandler implements RequestHandler<String, List<Event>> {

    public List<Event> handleRequest(String dateFrom, Context context) {
        LambdaLogger logger = context.getLogger();
        logger.log("request dateFrom: " + dateFrom);

        EventRepository eventRepo = new EventRepository();
        List<Event> events = eventRepo.findEvents(dateFrom);
        logger.log("events founds: " + (events != null ? events.size() : 0));
        return events;
    }

}
