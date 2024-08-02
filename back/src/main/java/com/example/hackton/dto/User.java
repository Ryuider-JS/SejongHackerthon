package com.example.hackton.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;



@Builder
@Entity
@NoArgsConstructor
public class User {

    @Id
    String lastname;

    @Column(length=500,nullable=false)
    String firstname;


    Integer age;

    boolean isMan;

    @Builder
    public User(String firstname, String lastname, Integer age, boolean isMan) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.isMan = isMan;
    }

}
