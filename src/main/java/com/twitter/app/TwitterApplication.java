package com.twitter.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class TwitterApplication {

    public static void main(String[] args) {
        SpringApplication.run(TwitterApplication.class, args);
    }

}
