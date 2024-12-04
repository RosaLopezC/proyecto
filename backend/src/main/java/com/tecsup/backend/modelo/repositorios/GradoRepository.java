package com.tecsup.backend.modelo.repositorios;
import com.tecsup.backend.modelo.entidades.Grado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GradoRepository extends JpaRepository<Grado, Long> {
}