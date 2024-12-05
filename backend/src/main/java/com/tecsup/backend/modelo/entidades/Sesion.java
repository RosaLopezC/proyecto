package com.tecsup.backend.modelo.entidades;

import jakarta.persistence.*;

@Entity
public class Sesion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "curso_id", nullable = false)  // Relación con Curso (clave foránea)
    private Curso curso;

    // Constructor por defecto
    public Sesion() {
    }

    // Constructor con parámetros
    public Sesion(String nombre, Curso curso) {
        this.nombre = nombre;
        this.curso = curso;
    }

    // Getters y setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }
}
