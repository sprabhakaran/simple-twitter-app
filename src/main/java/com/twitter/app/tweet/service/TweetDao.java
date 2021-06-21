package com.twitter.app.tweet.service;

import com.twitter.app.tweet.model.Tweet;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TweetDao<Tweet> {
    List<Tweet> getTweets();
}
