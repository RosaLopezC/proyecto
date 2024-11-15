package com.tecsup.backend.modelo.repositorios;
import com.tecsup.backend.modelo.entidades.Dificultades;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DificultadesRepository extends JpaRepository<Dificultades, Long> {
}