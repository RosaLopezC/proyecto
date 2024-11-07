package com.tecsup.backend.modelo.entidades;

import jakarta.persistence.*;

@Entity
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String titulo;
    @ManyToOne
    @JoinColumn(name = "grado_id", nullable = false)
    private Grado grado;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Grado getGrado() {
        return grado;
    }

    public void setGrado(Grado grado) {
        this.grado = grado;
    }

    @Override
    public String toString() {
        return "Grado{" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", grado='" + grado +
                '}';
    }
}