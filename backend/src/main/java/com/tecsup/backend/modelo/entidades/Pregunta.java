package com.tecsup.backend.modelo.entidades;

import jakarta.persistence.*;

@Table(name = "pregunta")
@Entity
public class Pregunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String enunciado;
    @Column
    @ManyToOne
    @JoinColumn(name = "leccion_id", nullable = false)
    private Leccion leccion;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEnunciado() {
        return enunciado;
    }

    public void setEnunciado(String enunciado) {
        this.enunciado = enunciado;
    }

    public Leccion getLeccion() {
        return leccion;
    }

    public void setLeccion(Leccion leccion) {
        this.leccion = leccion;
    }

    @Override
    public String toString() {
        return "Pregunta{" +
                "id=" + id +
                ", enunciado='" + enunciado + '\'' +
                ", leccion='" + leccion +
                '}';
    }
}
