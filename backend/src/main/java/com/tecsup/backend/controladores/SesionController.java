package com.tecsup.backend.controladores;

import com.tecsup.backend.modelo.entidades.Sesion;
import com.tecsup.backend.servicios.SesionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sesiones")
public class SesionController {

    private final SesionService sesionService;

    @Autowired
    public SesionController(SesionService sesionService) {
        this.sesionService = sesionService;
    }

    // Obtener todas las sesiones
    @GetMapping
    public List<Sesion> obtenerTodasLasSesiones() {
        return sesionService.getAllSesiones();
    }

    // Obtener sesión por id
    @GetMapping("/{id}")
    public Sesion obtenerSesionPorId(@PathVariable Long id) {
        return sesionService.getSesionById(id).orElse(null); // Retorna null si no existe
    }

    // Crear nueva sesión
    @PostMapping
    public Sesion crearSesion(@RequestParam String nombre, @RequestParam Long cursoId) {
        return sesionService.crearSesion(nombre, cursoId);
    }

    // Eliminar sesión por id
    @DeleteMapping("/{id}")
    public void eliminarSesion(@PathVariable Long id) {
        sesionService.deleteSesion(id);
    }
}
