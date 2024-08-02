package com.example.hackton.Model;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostResponse {
    String firstname;
    String lastname;
    Integer age;
    boolean isNan;

    public PostResponse(String firstname, String lastname) {
        this.firstname=firstname;
        this.lastname=lastname;
    }
}
