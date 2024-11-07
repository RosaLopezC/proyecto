package com.tecsup.backend.controladores;
import com.tecsup.backend.servicios.DjangoApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api")
public class DjangoProxyController {

    private final DjangoApiService djangoApiService;

    @Autowired
    public DjangoProxyController(DjangoApiService djangoApiService) {
        this.djangoApiService = djangoApiService;
    }

    @GetMapping("/data")
    public Mono<ResponseEntity<Object>> getData() {
        return djangoApiService.getDataFromDjango()
                .map(data -> ResponseEntity.ok(data));
    }
}
