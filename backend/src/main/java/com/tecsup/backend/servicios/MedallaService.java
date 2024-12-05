package com.tecsup.backend.servicios;

import com.tecsup.backend.modelo.entidades.Medalla;
import com.tecsup.backend.modelo.entidades.Puntaje;
import com.tecsup.backend.modelo.entidades.Sesion;
import com.tecsup.backend.modelo.entidades.Usuario;
import com.tecsup.backend.modelo.repositorios.MedallaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedallaService {

    @Autowired
    private MedallaRepository medallaRepository;

    // Asignar medalla basada en el puntaje obtenido
    public void asignarMedalla(Puntaje puntaje) {
        Usuario usuario = puntaje.getUsuario();
        Sesion sesion = puntaje.getSesion();
        int puntuacionObtenida = puntaje.getPuntuacionObtenida();

        final String tipoMedalla;
        if (puntuacionObtenida >= 2000) {
            tipoMedalla = "Oro";
        } else if (puntuacionObtenida >= 1500) {
            tipoMedalla = "Plata";
        } else if (puntuacionObtenida >= 1000) {
            tipoMedalla = "Bronce";
        } else {
            tipoMedalla = null;
        }

        if (tipoMedalla != null) {
            // Verificar si ya existe la medalla para el usuario en esa sesión
            Optional<Medalla> medallaExistente = medallaRepository.findAll()
                    .stream()
                    .filter(m -> m.getUsuario().getId().equals(usuario.getId()) &&
                            m.getSesion().getId().equals(sesion.getId()) &&
                            m.getTipo().equals(tipoMedalla))
                    .findFirst();

            if (medallaExistente.isEmpty()) {
                // Crear y guardar la medalla
                Medalla medalla = new Medalla(usuario, sesion, tipoMedalla);
                medallaRepository.save(medalla);
            }
        }
    }

    // Obtener todas las medallas de un usuario
    public List<Medalla> obtenerMedallasPorUsuario(Long usuarioId) {
        return medallaRepository.findByUsuarioId(usuarioId);
    }

    // Obtener todas las medallas de una sesión
    public List<Medalla> obtenerMedallasPorSesion(Long sesionId) {
        return medallaRepository.findBySesionId(sesionId);
    }
}
