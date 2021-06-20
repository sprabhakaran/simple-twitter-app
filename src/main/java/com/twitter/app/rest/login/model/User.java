package com.twitter.app.rest.login.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter
    @Getter
    private Long id;

    @Setter
    @Getter
    @Column(nullable = false, unique = true, length = 45)
    private String email;

    @Setter
    @Getter
    @Column(nullable = false, length = 64)
    private String password;

    @Column(name = "first_name", nullable = false, length = 20)
    @Setter
    @Getter
    private String firstName;

    @Setter
    @Getter
    @Column(name = "last_name", nullable = false, length = 20)
    private String lastName;


}