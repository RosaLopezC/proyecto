package com.tecsup.backend.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/login", "/api/register", "/public/**").permitAll()  // Permitir acceso a rutas públicas
                        .anyRequest().authenticated()  // Requiere autenticación para las demás rutas
                )
                .csrf().disable()  // Desactiva CSRF para permitir solicitudes de API REST
                .cors();  // Habilita CORS con la configuración global
        return http.build();
    }
}
