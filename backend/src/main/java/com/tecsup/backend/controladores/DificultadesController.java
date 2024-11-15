package com.tecsup.backend.controladores;
import com.tecsup.backend.modelo.entidades.Dificultades;
import com.tecsup.backend.modelo.repositorios.DificultadesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/dificultades")
public class DificultadesController {

    @Autowired
    private DificultadesRepository dificultadesRepository;

    // GET /api/dificultades - Listar todas las dificultades
    @GetMapping
    public List<Dificultades> listarDificultades() {
        return dificultadesRepository.findAll();
    }

    // GET /api/dificultades/{id} - Obtener una dificultad por ID
    @GetMapping("/{id}")
    public ResponseEntity<Dificultades> obtenerDificultadPorId(@PathVariable Long id) {
        Optional<Dificultades> dificultad = dificultadesRepository.findById(id);
        if (dificultad.isPresent()) {
            return ResponseEntity.ok(dificultad.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // POST /api/dificultades - Crear una nueva dificultad
    @PostMapping
    public Dificultades crearDificultad(@RequestBody Dificultades dificultad) {
        return dificultadesRepository.save(dificultad);
    }

    // PUT /api/dificultades/{id} - Actualizar una dificultad existente
    @PutMapping("/{id}")
    public ResponseEntity<Dificultades> actualizarDificultad(@PathVariable Long id, @RequestBody Dificultades dificultadActualizada) {
        Optional<Dificultades> dificultad = dificultadesRepository.findById(id);
        if (dificultad.isPresent()) {
            Dificultades dificultadExistente = dificultad.get();
            dificultadExistente.setNivel(dificultadActualizada.getNivel());
            return ResponseEntity.ok(dificultadesRepository.save(dificultadExistente));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // DELETE /api/dificultades/{id} - Eliminar una dificultad por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarDificultad(@PathVariable Long id) {
        if (dificultadesRepository.existsById(id)) {
            dificultadesRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}