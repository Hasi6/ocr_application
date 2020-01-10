// package com.udith.text_reader.config;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.messaging.simp.config.MessageBrokerRegistry;
// import org.springframework.web.socket.config.annotation.*;


// @Configuration
// @EnableWebSocketMessageBroker
// public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

//     @Override
//     public void registerStompEndpoints(StompEndpointRegistry registry) {
//         registry.addEndpoint("/ws").setAllowedOrigins("*").withSockJS();
//     }

//     @Override
//     public void configureMessageBroker(MessageBrokerRegistry registry) {
//         registry.setApplicationDestinationPrefixes("/app");
//         registry.enableSimpleBroker(
//                 "/topic/public",
//                 "/topic/user",
//                 "/topic/user/**",
//                 "/topic/questionVote/**",
//                 "topic/chat/**"
//         );   // Enables a simple in-memory broker
//     }
// }
