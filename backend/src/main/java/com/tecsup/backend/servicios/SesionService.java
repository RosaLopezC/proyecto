package com.tecsup.backend.servicios;

import com.tecsup.backend.modelo.entidades.Sesion;
import com.tecsup.backend.modelo.entidades.Curso;
import com.tecsup.backend.modelo.repositorios.SesionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SesionService {

    private final SesionRepository sesionRepository;
    private final CursoService cursoService;  // Suponiendo que tienes un servicio para manejar cursos

    @Autowired
    public SesionService(SesionRepository sesionRepository, CursoService cursoService) {
        this.sesionRepository = sesionRepository;
        this.cursoService = cursoService;
    }

    // Crear una sesión y calcular el puntaje
    public Sesion crearSesion(String nombre, long tiempoEnMilisegundos, Long cursoId) {
        // Obtener el curso por ID
        Curso curso = cursoService.obtenerCursoPorId(cursoId);

        // Verificar si el curso existe
        if (curso == null) {
            throw new IllegalArgumentException("Curso no encontrado");
        }

        // Calcular el puntaje basado en el tiempo
        int puntaje = Sesion.calcularPuntaje(tiempoEnMilisegundos);

        // Crear la sesión con el curso y puntaje
        Sesion sesion = new Sesion(nombre, puntaje, curso);

        // Guardar la sesión en la base de datos
        return sesionRepository.save(sesion);
    }

    // Obtener todas las sesiones
    public List<Sesion> getAllSesiones() {
        return sesionRepository.findAll();
    }

    // Obtener una sesión por id
    public Optional<Sesion> getSesionById(Long id) {
        return sesionRepository.findById(id);
    }

    // Eliminar una sesión por id
    public void deleteSesion(Long id) {
        sesionRepository.deleteById(id);
    }
}
