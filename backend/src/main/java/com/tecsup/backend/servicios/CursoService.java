package com.tecsup.backend.servicios;

import com.tecsup.backend.modelo.entidades.Curso;
import com.tecsup.backend.modelo.repositorios.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CursoService {

    private final CursoRepository cursoRepository;

    @Autowired
    public CursoService(CursoRepository cursoRepository) {
        this.cursoRepository = cursoRepository;
    }

    // Método para obtener un curso por su ID
    public Curso obtenerCursoPorId(Long id) {
        return cursoRepository.findById(id).orElse(null);
    }

    // Método para obtener todos los cursos
    public List<Curso> getAllCursos() {
        return cursoRepository.findAll();
    }

    // Método para crear un nuevo curso
    public Curso createCurso(Curso curso) {
        return cursoRepository.save(curso);
    }
}
