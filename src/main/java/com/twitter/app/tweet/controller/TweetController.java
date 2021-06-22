package com.twitter.app.tweet.controller;

import com.twitter.app.tweet.model.Tweet;
import com.twitter.app.tweet.service.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/v1/api/tweets")
public class TweetController {

    @Autowired
    private TweetRepository tweetRepo;

    @RequestMapping()
    public List<Tweet> getTweets(){
        return tweetRepo.findAll();
    }

    @RequestMapping("/add")
    public void addTweet(@RequestParam("content") String content){
        tweetRepo.save(new Tweet(101L, content) );
    }

    @PutMapping
    public void updateTweet(){
        System.out.println("Updating tweet ...");
    }

    @RequestMapping(value = "/id")
    public Tweet getTweet(@RequestParam("id") Long id){
        System.out.println("get Tweet " + id);
        return null;
    }

    @RequestMapping(value = "/get")
    public Tweet getTweet1(){
        System.out.println("get Tweet ");
        return null;
    }
}
