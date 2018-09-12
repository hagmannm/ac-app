package ch.ac.server;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Hello {

    static final Logger LOG = LogManager.getLogger(Hello.class);

    public String sayHello(String message) {

        LOG.debug("About to say hello");

        return "Hello " + message;
    }
}
