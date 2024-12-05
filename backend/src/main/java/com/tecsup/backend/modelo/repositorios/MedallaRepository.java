package com.tecsup.backend.modelo.repositorios;
import com.tecsup.backend.modelo.entidades.Medalla;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedallaRepository extends JpaRepository<Medalla, Long> {
    List<Medalla> findByUsuarioId(Long usuarioId);
    List<Medalla> findBySesionId(Long sesionId);
}