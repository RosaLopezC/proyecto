package com.tecsup.backend.modelo.repositorios;
import com.tecsup.backend.modelo.entidades.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {
}