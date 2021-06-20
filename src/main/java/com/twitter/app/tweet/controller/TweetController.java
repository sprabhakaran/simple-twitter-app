package com.twitter.app.tweet.controller;
//git's username update
import com.twitter.app.tweet.model.Tweet;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping(value = "/v1/api/tweet")
public class TweetController {

    @PostMapping()
    public void addTweet(){
        System.out.println("Post method called ...");
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
