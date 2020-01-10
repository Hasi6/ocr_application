package com.udith.text_reader.model.user;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

@Data
public class UserDetails {

    @Id
    private ObjectId id;

    private String name;
    private String profilePictureLink;
    private int votes;

    public UserDetails(String name,int votes, String profilePictureLink) {
        this.name = name;
        this.profilePictureLink = profilePictureLink;
        this.votes = votes;
    }

    @Override
    public String toString() {
        return String.format(
                "UserDetails[id=%s, name='%s', profileImage='%s', status='%s']",
                id, name, profilePictureLink,votes);
    }

}

//5dc86f754b186b34cd2ec664