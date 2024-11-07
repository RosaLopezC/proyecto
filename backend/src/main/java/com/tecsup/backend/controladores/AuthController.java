package com.tecsup.backend.controladores;
import com.tecsup.backend.modelo.entidades.JwtResponse;
import com.tecsup.backend.modelo.entidades.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        // Aquí puedes validar las credenciales
        // Genera un token JWT o maneja la sesión según tu implementación
        if (authenticateUser(loginRequest.getUsername(), loginRequest.getPassword())) {
            String token = generateJwtToken(loginRequest.getUsername());
            return ResponseEntity.ok(new JwtResponse(token));
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    // Método ficticio para autenticar al usuario. Implementa tu propia lógica aquí.
    private boolean authenticateUser(String username, String password) {
        // Verifica las credenciales en la base de datos u otro método
        return true; // Esto es solo un ejemplo
    }

    private String generateJwtToken(String username) {
        // Lógica para generar un token JWT
        return "jwt-token"; // Reemplaza con el token real generado
    }
}
