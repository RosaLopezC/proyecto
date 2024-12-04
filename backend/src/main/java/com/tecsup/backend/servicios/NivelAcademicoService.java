package com.tecsup.backend.servicios;
import com.tecsup.backend.modelo.entidades.NivelAcademico;
import com.tecsup.backend.modelo.repositorios.NivelAcademicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NivelAcademicoService {

    @Autowired
    private NivelAcademicoRepository nivelAcademicoRepository;

    public NivelAcademico crearNivelAcademico(NivelAcademico nivelAcademico) {
        return nivelAcademicoRepository.save(nivelAcademico);
    }

    public List<NivelAcademico> obtenerTodosNivelesAcademicos() {
        return nivelAcademicoRepository.findAll();
    }

    public Optional<NivelAcademico> obtenerNivelAcademicoPorId(Long id) {
        return nivelAcademicoRepository.findById(id);
    }

    public NivelAcademico actualizarNivelAcademico(Long id, NivelAcademico nivelAcademicoActualizado) {
        return nivelAcademicoRepository.findById(id)
                .map(nivelAcademico -> {
                    nivelAcademico.setNombre(nivelAcademicoActualizado.getNombre());
                    return nivelAcademicoRepository.save(nivelAcademico);
                })
                .orElse(null);
    }

    public void eliminarNivelAcademico(Long id) {
        nivelAcademicoRepository.deleteById(id);
    }
}