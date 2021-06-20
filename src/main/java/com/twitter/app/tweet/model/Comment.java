package com.twitter.app.tweet.model;
import javax.persistence.*;

@Entity
@Table(name = "Comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    Long tweetId;
    public Long getTweetId(){
        return tweetId;
    }

    public void setTweetId(Long tweetId){
        this.tweetId = tweetId;
    }

    Long parentCommentId;
    public Long getParentCommentId(){
        return parentCommentId;
    }

    public void setParentCommentId(Long parentCommentId){
        this.parentCommentId = parentCommentId;
    }

    String content;
    public String getContent(){
        return content;
    }

    public void setContent(String content){
        this.content = content;
    }
}
