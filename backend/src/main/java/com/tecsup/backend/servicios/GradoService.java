package com.tecsup.backend.servicios;

import com.tecsup.backend.modelo.entidades.Grado;
import com.tecsup.backend.modelo.repositorios.GradoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GradoService {

    private final GradoRepository gradoRepository;

    @Autowired
    public GradoService(GradoRepository gradoRepository) {
        this.gradoRepository = gradoRepository;
    }

    // Obtener todos los grados
    public List<Grado> getAllGrados() {
        return gradoRepository.findAll();
    }

    // Obtener un grado por su id
    public Optional<Grado> getGradoById(Long id) {
        return gradoRepository.findById(id);
    }

    // Crear o actualizar un grado
    public Grado saveGrado(Grado grado) {
        return gradoRepository.save(grado);
    }

    // Eliminar un grado
    public void deleteGrado(Long id) {
        gradoRepository.deleteById(id);
    }
}