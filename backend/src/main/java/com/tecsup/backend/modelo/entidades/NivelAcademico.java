package com.tecsup.backend.modelo.entidades;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.persistence.*;

@Entity
@Table(name = "nivelAcademico")
@JsonSerialize
@JsonInclude(JsonInclude.Include.NON_NULL)
public class NivelAcademico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String nombre;

    public NivelAcademico() {
    }

    public NivelAcademico(Long id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "NivelAcademico{" +
                "id=" + id +
                ", nombre='" + nombre +
                '}';
    }
}
