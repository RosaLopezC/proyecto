package com.tecsup.backend.servicios;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class DjangoApiService {

    private final WebClient webClient;

    public DjangoApiService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://apipi-j6ql.onrender.com/api/").build();  // URL base de la API de Django
    }

    public Mono<Object> getDataFromDjango() {
        return this.webClient.get()
                .uri("/data")  // Endpoint en Django
                .retrieve()
                .bodyToMono(Object.class);  // Puedes especificar una clase en lugar de Object si tienes un modelo
    }
}


