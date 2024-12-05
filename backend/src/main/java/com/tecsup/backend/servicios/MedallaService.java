package com.tecsup.backend.servicios;
import com.tecsup.backend.modelo.entidades.Medalla;
import com.tecsup.backend.modelo.entidades.Puntaje;
import com.tecsup.backend.modelo.entidades.Sesion;
import com.tecsup.backend.modelo.entidades.Usuario;
import com.tecsup.backend.modelo.repositorios.MedallaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MedallaService {

    @Autowired
    private MedallaRepository medallaRepository;

    public void asignarMedalla(Puntaje puntaje) {
        Usuario usuario = puntaje.getUsuario();
        Sesion sesion = puntaje.getSesion();
        int puntuacionObtenida = puntaje.getPuntuacionObtenida();

        // Definir tipoMedalla como final
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
            // Verificar si el usuario ya tiene esta medalla
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

}