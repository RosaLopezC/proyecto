package com.tecsup.backend.controladores;
import com.tecsup.backend.servicios.PuntajeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/puntajes")
public class PuntajeController {

    @Autowired
    private PuntajeService puntajeService;

    // Endpoint para obtener puntaje acumulado por sesión
    @GetMapping("/sesion/{sesionId}/acumulado")
    public int obtenerPuntajeAcumuladoPorSesion(@PathVariable Long sesionId) {
        return puntajeService.calcularPuntajeAcumuladoPorSesion(sesionId);
    }
}