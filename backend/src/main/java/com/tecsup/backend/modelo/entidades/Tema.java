package com.tecsup.backend.modelo.entidades;

import jakarta.persistence.*;

@Entity
public class Tema {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String titulo;
    @ManyToOne
    @JoinColumn(name = "curso_id", nullable = false)
    private Curso curso;

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

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }
    @Override
    public String toString() {
        return "Tema{" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", curso='" + curso +
                '}';
    }
}
