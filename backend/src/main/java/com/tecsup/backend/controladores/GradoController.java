package com.tecsup.backend.controladores;

import com.tecsup.backend.modelo.entidades.Grado;
import com.tecsup.backend.servicios.GradoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/grados")
public class GradoController {

    private final GradoService gradoService;

    @Autowired
    public GradoController(GradoService gradoService) {
        this.gradoService = gradoService;
    }

    // Obtener todos los grados
    @GetMapping
    public List<Grado> getAllGrados() {
        return gradoService.getAllGrados();
    }

    // Obtener un grado por id
    @GetMapping("/{id}")
    public ResponseEntity<Grado> getGradoById(@PathVariable Long id) {
        Optional<Grado> grado = gradoService.getGradoById(id);
        return grado.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Crear o actualizar un grado
    @PostMapping
    public ResponseEntity<Grado> createOrUpdateGrado(@RequestBody Grado grado) {
        Grado savedGrado = gradoService.saveGrado(grado);
        return new ResponseEntity<>(savedGrado, HttpStatus.CREATED);
    }

    // Eliminar un grado
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGrado(@PathVariable Long id) {
        gradoService.deleteGrado(id);
        return ResponseEntity.noContent().build();
    }
}