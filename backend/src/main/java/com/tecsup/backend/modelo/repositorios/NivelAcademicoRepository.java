package com.tecsup.backend.modelo.repositorios;
import com.tecsup.backend.modelo.entidades.NivelAcademico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NivelAcademicoRepository extends JpaRepository<NivelAcademico, Long> {
    // Métodos de consulta personalizados pueden agregarse aquí si es necesario
}