package com.tecsup.backend.modelo.repositorios;
import com.tecsup.backend.modelo.entidades.Sesion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SesionRepository extends JpaRepository<Sesion, Long> {
}