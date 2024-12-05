package com.tecsup.backend.servicios;

import com.tecsup.backend.modelo.entidades.Curso;
import com.tecsup.backend.modelo.entidades.Sesion;
import com.tecsup.backend.modelo.repositorios.CursoRepository;
import com.tecsup.backend.modelo.repositorios.SesionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SesionService {

    @Autowired
    private SesionRepository sesionRepository;

    @Autowired
    private CursoRepository cursoRepository;

    // Obtener todas las sesiones
    public List<Sesion> getAllSesiones() {
        return sesionRepository.findAll();
    }

    // Obtener sesión por ID
    public Optional<Sesion> getSesionById(Long id) {
        return sesionRepository.findById(id);
    }

    // Crear nueva sesión
    public Sesion crearSesion(String nombre, Long cursoId) {
        // Buscar el curso al que se asociará la sesión
        Curso curso = cursoRepository.findById(cursoId)
                .orElseThrow(() -> new RuntimeException("Curso no encontrado con ID: " + cursoId));

        // Crear la nueva sesión
        Sesion nuevaSesion = new Sesion(nombre, curso);
        return sesionRepository.save(nuevaSesion);
    }

    // Eliminar sesión por ID
    public void deleteSesion(Long id) {
        sesionRepository.deleteById(id);
    }
}
