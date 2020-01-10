package com.udith.text_reader.model.user;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

@Data
public class User {

    @Id
    private ObjectId id;

    @Indexed(unique = true)
    private String email;
    private String password;
    private String userDetailsId;

    public User(String email, String password, String userDetailsId) {
        this.email = email;
        this.password = password;
        this.userDetailsId = userDetailsId;
    }

    @Override
    public String toString() {
        return String.format(
                "User[id=%s, email='%s', UserDetailsIdRes:'%s']",
                id, email,userDetailsId);
    }

}