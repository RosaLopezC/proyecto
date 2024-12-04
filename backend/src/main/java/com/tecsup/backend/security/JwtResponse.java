package com.tecsup.backend.security;
public class JwtResponse {

    private String token;
    private String type = "Bearer";

    // Constructor
    public JwtResponse(String token) {
        this.token = token;
    }

    // Getters y Setters
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}