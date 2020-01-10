package com.udith.text_reader.repository.user;


import com.udith.text_reader.model.user.User;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<User, String>{
    User findById(ObjectId id);
    User findByEmail(String email);
}