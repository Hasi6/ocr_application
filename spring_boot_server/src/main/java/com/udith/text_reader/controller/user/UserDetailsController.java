package com.udith.text_reader.controller.user;


import com.udith.text_reader.model.user.UserDetails;
import com.udith.text_reader.repository.user.UserDetailsRepository;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/userDetails")
public class UserDetailsController {

    @Autowired
    private UserDetailsRepository  userDetailsRepository;


    @PostMapping("save")
    public String saveUser(@RequestBody UserDetails userDetails) {
        UserDetails userDetails1 = this.userDetailsRepository.save(userDetails);
        return userDetails1.getId().toString();
    }

    @GetMapping("getUserDetailsById/{id}")
    public UserDetails getDetails(@PathVariable("id") String userDetailsId){
        UserDetails userDetails = this.userDetailsRepository.findById(new ObjectId(userDetailsId));
        return userDetails;
    }
    @PutMapping("update")
    public UserDetails updateUserDetails(@RequestBody UserDetails userDetails){
//        userDetails.setId(UserDetailsIdRes);
        userDetails = this.userDetailsRepository.save(userDetails);
        return userDetails;
    }
}
