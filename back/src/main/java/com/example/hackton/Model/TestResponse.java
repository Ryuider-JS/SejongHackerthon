package com.example.hackton.Model;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TestResponse {

    private int result;

    // Constructor
    public TestResponse(int result) {
        this.result = result;
    }
}
