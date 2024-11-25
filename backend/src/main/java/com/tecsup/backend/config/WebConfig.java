package com.tecsup.backend.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Habilita CORS para todos los endpoints
                        .allowedOrigins("http://localhost:3000") // Permite solicitudes desde React
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos permitidos
                        .allowedHeaders("*") // Permite todos los encabezados
                        .exposedHeaders("Authorization") // Expone encabezados específicos
                        .allowCredentials(true); // Permite el uso de cookies o credenciales
            }
        };
    }
}
