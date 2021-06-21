package com.twitter.app.tweet.service;

import com.twitter.app.tweet.model.Tweet;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;
import java.util.Collections;
import java.util.List;

public class TweetDaoImpl implements TweetDao<Tweet> {

    private DataSource dataSource;
    private JdbcTemplate jdbcTemplateObject;

    @Override
    public List<Tweet> getTweets() {
        return Collections.emptyList();
    }
}
