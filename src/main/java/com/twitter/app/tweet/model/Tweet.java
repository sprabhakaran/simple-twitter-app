package com.twitter.app.tweet.model;
import javax.persistence.*;

@Entity
@Table(name = "Tweet")
public class Tweet {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    Long id;

    @Column(name = "created_by", nullable = false)
    Long createdBy;

    @Column(name = "created_time", nullable = false)
    Long createdTime;

    @Column(name = "content", nullable = false)
    String content;

    public Tweet(Long createdBy, String content){
        this.createdBy = createdBy;
        this.content = content;
        this.createdTime = System.currentTimeMillis();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Long createdBy) {
        this.createdBy = createdBy;
    }

    public Long getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Long createdTime) {
        this.createdTime = createdTime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

}
