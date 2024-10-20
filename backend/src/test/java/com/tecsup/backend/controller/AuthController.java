package com.tecsup.backend.controller;

import com.tecsup.backend.dto.AuthRequest;
import com.tecsup.backend.entity.Usuario;
import com.tecsup.backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        Usuario usuario = usuarioService.login(request.getEmail(), request.getPassword());
        return ResponseEntity.ok(usuario); // Aquí puedes devolver un token JWT si lo implementas.
    }
}
