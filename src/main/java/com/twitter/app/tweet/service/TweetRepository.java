package com.twitter.app.tweet.service;

import com.twitter.app.tweet.model.Tweet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
public interface TweetRepository extends JpaRepository<Tweet, Long> {

}
