package com.udith.text_reader.model.jwt;

import java.io.Serializable;

public class JwtResponse implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;
    public final String jwttoken;
    public final String userDetailsId;

    public JwtResponse(String jwttoken,String userDetailsId) {
        this.jwttoken = jwttoken;
        this.userDetailsId = userDetailsId;
    }
    public String getToken() {
        return this.jwttoken;
    }
    public String getUserDetailsId(){return this.userDetailsId; }

}