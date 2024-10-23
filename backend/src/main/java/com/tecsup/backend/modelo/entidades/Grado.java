package com.tecsup.backend.modelo.entidades;

import jakarta.persistence.*;

@Entity
@Table(name = "grado")
public class Grado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "nivel_academico_id", nullable = false)
    private NivelAcademico nivelAcademico;
    @Column
    private String nombreGrado;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public NivelAcademico getNivelAcademico() {
        return nivelAcademico;
    }

    public void setNivelAcademico(NivelAcademico nivelAcademico) {
        this.nivelAcademico = nivelAcademico;
    }

    public String getNombreGrado() {
        return nombreGrado;
    }

    public void setNombreGrado(String nombreGrado) {
        this.nombreGrado = nombreGrado;
    }

    @Override
    public String toString() {
        return "Grado{" +
                "id=" + id +
                ", nivelAcademico='" + nivelAcademico + '\'' +
                ", nombreGrado='" + nombreGrado +
                '}';
    }
}