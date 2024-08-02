package com.example.hackton.Controller;


import com.example.hackton.Model.*;
import com.example.hackton.Service.testService;
import com.google.api.services.youtube.model.SearchResult;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class testController {

    private List<String> categoryList=new ArrayList<>();
    private List<Double> ratioList=new ArrayList<>();

    private List<String> resultList=new ArrayList<>();

    private List<VideoInfo> videoList=new ArrayList<>();

    @Autowired
    private SimpMessagingTemplate template;
    ResultRequest getTest;
    private final testService testservice;
    @GetMapping("/test")
    public ResultRequest test(){
        return getTest;
    }

    @PostMapping("/result")
    public void receiveResult(@RequestBody ResultRequest request) {
        double receivedResult = request.getResult();

        System.out.println(request);
        getTest=request;
    }

    //사용자로부터
    @PostMapping("/test2")
    public List<String> postTest(@RequestBody List<PostRequest> req){

        System.out.println(req.get(0).getCategory());
        for (PostRequest postRequest:req){
            categoryList.add(postRequest.getCategory());
            ratioList.add(postRequest.getRatio());

        }




        return categoryList;
    }

    @DeleteMapping("/test3")
    public String deleteTest(@RequestBody DeleteRequest deleteRequest){
        testservice.deleteUserInfo(deleteRequest);

        return "삭제~~~완료~~~~!";
    }

    //ai에게 넘겨줄 50개의 데이터
    @PostMapping("/youtube")
    public List<String> searchVideo() throws IOException {
        // YoutubeService를 통해 동영상 검색한 결과를 받아옴
        List<SearchResult> searchResult=new ArrayList<>();
        for (int i=0;i<categoryList.size();i++){


            List<SearchResult> tmp=testservice.searchVideo(categoryList.get(i),ratioList.get(i));

            for (SearchResult search:tmp){
                searchResult.add(search);


            }

        }

//        for (int k=0;k<searchResult.size();k++){
////
//        videoList.add(new VideoInfo(
//                searchResult.get(k).getSnippet().getThumbnails().getDefault().getUrl(),
//                searchResult.get(k).getSnippet().getTitle(),
//                "https://www.youtube.com/watch?v=".concat(searchResult.get(k).getId().getVideoId())
//                ));
//
////            //resultList.add(searchResult.get(k).getSnippet().getThumbnails().getDefault().getUrl());
////
//        }

        for (int k=0;k<9;k++){
//
            videoList.add(new VideoInfo(
                    searchResult.get(k).getSnippet().getThumbnails().getDefault().getUrl(),
                    searchResult.get(k).getSnippet().getTitle(),
                    "https://www.youtube.com/watch?v=".concat(searchResult.get(k).getId().getVideoId())
            ));

//            //resultList.add(searchResult.get(k).getSnippet().getThumbnails().getDefault().getUrl());
//
        }




        return resultList;

    }

    //ai로부터 받을 9개의 데이터
    @GetMapping("/resultresult")
    public List<VideoInfo> getResultVideo(){
        //id, thumnail, 제목

        System.out.println();
        while (true){
            if (!videoList.isEmpty()) {
                break;


            }
        }
        return videoList;

    }






}
