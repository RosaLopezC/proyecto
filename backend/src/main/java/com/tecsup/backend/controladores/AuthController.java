package com.tecsup.backend.controladores;

import com.tecsup.backend.security.JwtResponse;
import com.tecsup.backend.modelo.entidades.LoginRequest;
import com.tecsup.backend.modelo.entidades.Usuario;
import com.tecsup.backend.servicios.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Usuario usuario) {
        if (usuarioService.findByEmail(usuario.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("El correo ya está registrado.");
        }
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));

        usuarioService.saveUsuario(usuario);
        return ResponseEntity.ok("Usuario registrado exitosamente");
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        // Autenticación del usuario
        Optional<Usuario> usuarioOpt = usuarioService.findByEmail(loginRequest.getUsername());

        if (usuarioOpt.isPresent() && authenticateUser(usuarioOpt.get(), loginRequest.getPassword())) {
            String token = generateJwtToken(usuarioOpt.get().getEmail());
            return ResponseEntity.ok(new JwtResponse(token));
        } else {
            return ResponseEntity.status(401).body("Credenciales inválidas");
        }
    }

    @PostMapping("/google")
    public ResponseEntity<?> loginWithGoogle(@RequestBody Usuario googleUser) {
        Usuario usuario = usuarioService.findByEmail(googleUser.getEmail())
                .orElseGet(() -> {
                    // Crear un nuevo usuario si no existe
                    Usuario newUser = new Usuario();
                    newUser.setEmail(googleUser.getEmail());
                    newUser.setNombre(googleUser.getNombre());
                    newUser.setApellido(googleUser.getApellido());
                    newUser.setFechaNacimiento(googleUser.getFechaNacimiento());
                    newUser.setProvider("GOOGLE");
                    return usuarioService.saveUsuario(newUser);
                });
        String token = generateJwtToken(usuario.getEmail());
        return ResponseEntity.ok(new JwtResponse(token));
    }

    private boolean authenticateUser(Usuario usuario, String password) {
        // Verifica la contraseña proporcionada contra la almacenada
        return passwordEncoder.matches(password, usuario.getPassword());
    }

    private String generateJwtToken(String email) {
        // Lógica para generar un token JWT
        return "jwt-token"; // Reemplaza con el token real generado
    }
}
