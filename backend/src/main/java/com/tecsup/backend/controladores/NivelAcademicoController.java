package com.tecsup.backend.controladores;
import com.tecsup.backend.modelo.entidades.NivelAcademico;
import com.tecsup.backend.servicios.NivelAcademicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/niveles-academicos")
public class NivelAcademicoController {

    @Autowired
    private NivelAcademicoService nivelAcademicoService;

    @PostMapping
    public ResponseEntity<NivelAcademico> crearNivelAcademico(@RequestBody NivelAcademico nivelAcademico) {
        NivelAcademico nuevoNivel = nivelAcademicoService.crearNivelAcademico(nivelAcademico);
        return new ResponseEntity<>(nuevoNivel, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<NivelAcademico>> obtenerTodosNivelesAcademicos() {
        List<NivelAcademico> nivelesAcademicos = nivelAcademicoService.obtenerTodosNivelesAcademicos();
        return new ResponseEntity<>(nivelesAcademicos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<NivelAcademico> obtenerNivelAcademicoPorId(@PathVariable Long id) {
        Optional<NivelAcademico> nivelAcademico = nivelAcademicoService.obtenerNivelAcademicoPorId(id);
        return nivelAcademico.map(ResponseEntity::ok)
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<NivelAcademico> actualizarNivelAcademico(
            @PathVariable Long id,
            @RequestBody NivelAcademico nivelAcademico) {
        NivelAcademico nivelActualizado = nivelAcademicoService.actualizarNivelAcademico(id, nivelAcademico);
        return nivelActualizado != null
                ? new ResponseEntity<>(nivelActualizado, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarNivelAcademico(@PathVariable Long id) {
        nivelAcademicoService.eliminarNivelAcademico(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}