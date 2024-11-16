package com.tecsup.backend.controladores;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;

@RestController
public class UserController {

    @GetMapping("/api/userinfo")
    public OAuth2User getUserInfo(@AuthenticationPrincipal OAuth2User principal) {
        return principal; // Devuelve información del usuario autenticado
    }
}