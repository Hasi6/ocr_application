// package com.udith.text_reader.controller.user;

// import java.util.ArrayList;

// import com.udith.text_reader.config.JwtTokenUtil;
// import com.udith.text_reader.model.jwt.JwtResponse;
// import com.udith.text_reader.model.user.User;
// import com.udith.text_reader.repository.user.UserRepository;
// import com.udith.text_reader.service.JwtUserDetailsService;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.mail.SimpleMailMessage;
// import org.springframework.mail.javamail.JavaMailSender;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.web.bind.annotation.*;
// import org.springframework.security.core.userdetails.UserDetails;



// @CrossOrigin(origins = "http://localhost:3000")
// @RestController
// @RequestMapping("/user")
// public class UserController{
    
//     @Autowired
//     private UserRepository userRepository;
//     @Autowired
//     private JwtTokenUtil jwtTokenUtil;
//     @Autowired
//     private JwtUserDetailsService userDetailsService;
//     @Autowired
//     private JavaMailSender javaMailSender;


//     @PostMapping("save")
//     public ResponseEntity<?> saveUser(@RequestBody User user) throws Exception {
//         User user1 = this.userRepository.findByEmail(user.getEmail());
//         sendEmail();
//         if(user1 == null){
//             BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//             user.setPassword(passwordEncoder.encode(user.getPassword()));
//             this.userRepository.save(user);

//             //getting token
//             final UserDetails userDetails = userDetailsService
//                     .loadUserByUsername(user.getEmail());
//             final String token = jwtTokenUtil.generateToken(userDetails);
//             return new ResponseEntity<>(new JwtResponse(token,user.getUserDetailsId()), HttpStatus.resolve(200));
//         }else{
//             return new ResponseEntity<>("user already exists", HttpStatus.resolve(400));
//         }
//     }

//     @PostMapping("/login")
//     public ResponseEntity<?> getUserByEmail(@RequestBody User inputUser)throws Exception{
//         User user = this.userRepository.findByEmail(inputUser.getEmail());
//         if(user != null){
//             BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//             if(encoder.matches(inputUser.getPassword(),user.getPassword())){
//                 final UserDetails userDetails = new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
//                         new ArrayList<>());
//                 final String token = jwtTokenUtil.generateToken(userDetails);
//                 return new ResponseEntity<>(new JwtResponse(token,user.getUserDetailsId()), HttpStatus.resolve(200));
//             }else{
//                 return new ResponseEntity<>("password is not correct", HttpStatus.resolve(203));
//             }
//         }else{
//             return new ResponseEntity<>("Email not found", HttpStatus.resolve(404));
//         }
//     }

//     // @PutMapping("updateUserDetailId")
//     // public String updateUserDetailsId(@Valid @RequestBody UserDetailsUpdate userDetailsUpdate){
//     //     User user = this.userRepository.findById(new ObjectId(userDetailsUpdate.getId()));
//     //     user.setUserDetailsId(userDetailsUpdate.getUserDetailsId());
//     //     userRepository.save(user);
//     //     return "userDetails id updated successfully";
//     // }
//     void sendEmail() {
//         SimpleMailMessage msg = new SimpleMailMessage();
//         msg.setTo("udithshalinda2@gmail.com");
//         msg.setSubject("Testing from Spring Boot");
//         msg.setText("Hello World \n new t message Spring Boot Email");
//         javaMailSender.send(msg);
//     }



// }

