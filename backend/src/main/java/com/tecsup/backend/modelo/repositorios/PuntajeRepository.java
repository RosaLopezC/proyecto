package com.tecsup.backend.modelo.repositorios;
import com.tecsup.backend.modelo.entidades.Puntaje;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PuntajeRepository extends JpaRepository<Puntaje, Long> {
    List<Puntaje> findBySesionId(Long sesionId);
}