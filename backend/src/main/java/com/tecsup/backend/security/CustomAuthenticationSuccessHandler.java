package com.tecsup.backend.security;

import com.tecsup.backend.modelo.entidades.Usuario;
import com.tecsup.backend.servicios.UsuarioService;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Component
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private final UsuarioService usuarioService;
    private final OAuth2AuthorizedClientService clientService;

    public CustomAuthenticationSuccessHandler(UsuarioService usuarioService, OAuth2AuthorizedClientService clientService) {
        this.usuarioService = usuarioService;
        this.clientService = clientService;
    }

    // Método para obtener el perfil de Google
    private Map<String, Object> fetchGoogleProfile(String accessToken) {
        try {
            // URL actualizada para solicitar específicamente birthdays
            String url = "https://people.googleapis.com/v1/people/me?personFields=birthdays,names";
            HttpHeaders headers = new HttpHeaders();
            headers.setBearerAuth(accessToken);

            RestTemplate restTemplate = new RestTemplate();
            HttpEntity<String> entity = new HttpEntity<>(headers);

            ResponseEntity<Map> response = restTemplate.exchange(
                    url,
                    HttpMethod.GET,
                    entity,
                    Map.class
            );

            System.out.println("Respuesta completa de Google People API: " + response.getBody());

            return response.getBody();
        } catch (Exception e) {
            System.err.println("Error al obtener perfil de Google: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }

    // Método para extraer la fecha de nacimiento
    private LocalDate extractBirthdate(Map<String, Object> profile) {
        try {
            System.out.println("Perfil recibido para extracción: " + profile);

            if (profile != null && profile.containsKey("birthdays")) {
                List<Map<String, Object>> birthdays = (List<Map<String, Object>>) profile.get("birthdays");
                System.out.println("Birthdays encontrados: " + birthdays);

                if (birthdays != null && !birthdays.isEmpty()) {
                    for (Map<String, Object> birthday : birthdays) {
                        System.out.println("Birthday individual: " + birthday);

                        Map<String, Object> date = (Map<String, Object>) birthday.get("date");
                        System.out.println("Fecha: " + date);

                        int year = date.containsKey("year") ? (int) date.get("year") : 0;
                        int month = date.containsKey("month") ? (int) date.get("month") : 0;
                        int day = date.containsKey("day") ? (int) date.get("day") : 0;

                        System.out.println("Valores: Año=" + year + ", Mes=" + month + ", Día=" + day);

                        if (year > 0 && month > 0 && day > 0) {
                            return LocalDate.of(year, month, day);
                        }
                    }
                }
            }
        } catch (Exception e) {
            System.err.println("Error detallado al extraer fecha de nacimiento: ");
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
        // Cast de Authentication a OAuth2AuthenticationToken
        OAuth2AuthenticationToken oauthToken = (OAuth2AuthenticationToken) authentication;

        // Obtén el usuario autenticado
        OAuth2User oAuth2User = oauthToken.getPrincipal();
        Map<String, Object> attributes = oAuth2User.getAttributes();

        // Extraer datos básicos del usuario
        String email = (String) attributes.get("email");
        String nombre = (String) attributes.get("given_name");
        String apellido = (String) attributes.get("family_name");

        // Extrae el token de acceso desde el cliente autorizado
        OAuth2AuthorizedClient client = clientService.loadAuthorizedClient(
                oauthToken.getAuthorizedClientRegistrationId(),
                oauthToken.getName()
        );
        OAuth2AccessToken oAuth2AccessToken = client.getAccessToken();
        String accessToken = oAuth2AccessToken.getTokenValue();

        // Obtener perfil de Google
        Map<String, Object> profile = fetchGoogleProfile(accessToken);
        LocalDate birthdate = extractBirthdate(profile);

        // Depuración: Imprimir atributos y perfil
        System.out.println("Atributos de Google: " + attributes);
        System.out.println("Perfil completo: " + profile);
        System.out.println("Fecha de nacimiento extraída: " + birthdate);

        // Guardar o actualizar al usuario
        Optional<Usuario> existingUser = usuarioService.findByEmail(email);
        if (existingUser.isEmpty()) {
            Usuario nuevoUsuario = new Usuario();
            nuevoUsuario.setEmail(email);
            nuevoUsuario.setNombre(nombre);
            nuevoUsuario.setApellido(apellido);
            nuevoUsuario.setFechaNacimiento(birthdate);
            nuevoUsuario.setProvider("GOOGLE");
            nuevoUsuario.setPassword("google_user"); // Contraseña por defecto
            usuarioService.saveUsuario(nuevoUsuario);
        } else {
            Usuario usuario = existingUser.get();
            usuario.setNombre(nombre);
            usuario.setApellido(apellido);
            usuario.setFechaNacimiento(birthdate);
            usuarioService.saveUsuario(usuario);
        }

        // Redirigir al frontend
        response.sendRedirect("http://localhost:3000/menu");
    }
}