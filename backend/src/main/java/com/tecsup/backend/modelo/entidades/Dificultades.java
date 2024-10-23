package com.tecsup.backend.modelo.entidades;

import jakarta.persistence.*;

@Entity
public class Dificultades {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String nivel; // Facil, intermedio, dificil

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNivel() {
        return nivel;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }

    @Override
    public String toString() {
        return "Dificultades{" +
                "id=" + id +
                ", nivel='" + nivel +
                '}';
    }
}
