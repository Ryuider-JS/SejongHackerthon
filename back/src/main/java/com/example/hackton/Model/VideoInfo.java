package com.example.hackton.Model;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class VideoInfo {
    String videoId;
    String thumnail;
    String title;

    public VideoInfo(String thumnail, String title, String videoId) {
        this.thumnail=thumnail;
        this.title=title;
        this.videoId=videoId;
    }
}
