package com.example.hackton.Service;

import com.example.hackton.Model.DeleteRequest;
import com.example.hackton.Repository.UserRepository;
import com.example.hackton.dto.User;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.SearchListResponse;
import com.google.api.services.youtube.model.SearchResult;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class testService {

    @Value("AIzaSyAPLQGExKP6aReZaY1ANDMmr6S7XS6jptY")
    private String apiKey;
    private final UserRepository userRepository;


//    public User saveUserInfo(PostRequest postRequest) {
//        User user=User.builder()
//                .firstname(postRequest.getFirstname())
//                .lastname(postRequest.getLastname())
//
//                .isMan(postRequest.isMan())
//                .age(postRequest.getAge())
//                .build();
//
//        userRepository.save(user);
//
//
//
//        return user;
//
//    }



    public void deleteUserInfo(DeleteRequest deleteRequest) {
        String res=deleteRequest.getLastname();
        System.out.println("id"+" "+res);
        Optional<User> delUser=userRepository.findById(res);

        userRepository.deleteById(res);

    }



    public List<SearchResult> searchVideo(String category, Double ratio) throws IOException {
        // JSON 데이터를 처리하기 위한 JsonFactory 객체 생성
        JsonFactory jsonFactory = new JacksonFactory();

        // YouTube 객체를 빌드하여 API에 접근할 수 있는 YouTube 클라이언트 생성
        YouTube youtube = new YouTube.Builder(
                new com.google.api.client.http.javanet.NetHttpTransport(),
                jsonFactory,
                request -> {})
                .build();

        // YouTube Search API를 사용하여 동영상 검색을 위한 요청 객체 생성
        YouTube.Search.List search = youtube.search().list(Collections.singletonList("id,snippet"));

        // API 키 설정
        search.setKey(apiKey);

        //최대 결과치 수정
        search.setMaxResults((long) (50*ratio));

        // 검색어 설정
        search.setQ(category);
        // 검색 요청 실행 및 응답 받아오기
        SearchListResponse searchResponse = search.execute();

        // 검색 결과에서 동영상 목록 가져오기
        List<SearchResult> searchResultList = searchResponse.getItems();



        //50개 객체 전달
        return searchResultList;
    }
}
