package com.twitter.app.test.ex1;

import com.twitter.app.test.ex1.repo.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyRunner {

    @Autowired
    private CityRepository cityRepository;

    @RequestMapping("fn")
    public String callFn(){
        return "Hello Wrold";
    }
}
