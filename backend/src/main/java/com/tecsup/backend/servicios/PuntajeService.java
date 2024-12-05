package com.tecsup.backend.servicios;
import com.tecsup.backend.modelo.entidades.Puntaje;
import com.tecsup.backend.modelo.repositorios.PuntajeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PuntajeService {

    @Autowired
    private PuntajeRepository puntajeRepository;

    // Método para registrar un nuevo puntaje
    public Puntaje registrarPuntaje(Puntaje puntaje) {
        return puntajeRepository.save(puntaje);
    }

    // Obtener puntajes por sesión
    public List<Puntaje> obtenerPuntajesPorSesion(Long sesionId) {
        return puntajeRepository.findBySesionId(sesionId);
    }

    // Calcular puntaje acumulado por sesión
    public int calcularPuntajeAcumuladoPorSesion(Long sesionId) {
        return puntajeRepository.findBySesionId(sesionId)
                .stream()
                .mapToInt(Puntaje::getPuntuacionObtenida)
                .sum();
    }
}