// package com.udith.text_reader.service;


// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.userdetails.User;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.stereotype.Service;

// import java.util.ArrayList;

// import com.udith.text_reader.repository.user.UserRepository;


// @Service
// public class JwtUserDetailsService implements UserDetailsService {
//     @Autowired
//     private UserRepository userRepository;

//     @Override
//     public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//         com.udith.text_reader.model.user.User user = this.userRepository.findByEmail(email);
//         if(user != null){
//             return new User(user.getEmail(), user.getPassword(),
//                     new ArrayList<>());
//         }else{
//             throw new UsernameNotFoundException("User not found with username: " + email);
//         }
//     }
// }