package com.twitter.app.rest.login.service;

import com.twitter.app.rest.login.model.CustomUserDetails;
import com.twitter.app.rest.login.model.User;
import com.twitter.app.rest.login.model.UserRepository1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

//@Component
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository1 userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new CustomUserDetails(user);
    }

}