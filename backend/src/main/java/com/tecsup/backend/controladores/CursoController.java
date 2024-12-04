package com.tecsup.backend.controladores;

import com.tecsup.backend.modelo.entidades.Curso;
import com.tecsup.backend.servicios.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cursos")
public class CursoController {

    private final CursoService cursoService;

    @Autowired
    public CursoController(CursoService cursoService) {
        this.cursoService = cursoService;
    }

    // Obtener todos los cursos
    @GetMapping
    public List<Curso> obtenerTodosLosCursos() {
        return cursoService.getAllCursos();
    }

    // Obtener un curso por id
    @GetMapping("/{id}")
    public Curso obtenerCursoPorId(@PathVariable Long id) {
        return cursoService.obtenerCursoPorId(id);
    }

    // Crear un nuevo curso
    @PostMapping
    public Curso crearCurso(@RequestBody Curso curso) {
        return cursoService.createCurso(curso);
    }
}