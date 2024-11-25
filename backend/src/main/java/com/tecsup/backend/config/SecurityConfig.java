package com.tecsup.backend.config;

import com.tecsup.backend.security.CustomAuthenticationSuccessHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    private final CustomAuthenticationSuccessHandler successHandler;

    public SecurityConfig(CustomAuthenticationSuccessHandler successHandler) {
        this.successHandler = successHandler;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // Desactiva CSRF para evitar bloqueos en solicitudes sin autenticación
                .cors().and() // Habilita CORS para manejar solicitudes preflight desde el frontend
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/", "/login**", "/api/auth/**").permitAll() // Permite el acceso público a estas rutas
                        .anyRequest().authenticated() // Requiere autenticación para otras rutas
                )
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(successHandler) // Usa el manejador personalizado para OAuth2
                );
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Configura el encriptador de contraseñas
    }
}
