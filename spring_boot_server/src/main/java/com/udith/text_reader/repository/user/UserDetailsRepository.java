package com.udith.text_reader.repository.user;

import com.udith.text_reader.model.user.UserDetails;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserDetailsRepository extends MongoRepository<UserDetails, String> {
    UserDetails findById(ObjectId id);
}