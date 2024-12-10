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

    @Column(nullable = false)
    private String imagen; // Ruta de la imagen (URL relativa o absoluta)

    @Column(nullable = false)
    private String ruta; // Ruta del archivo de juego (para navegación)

    // Constructor por defecto
    public Sesion() {
    }

    // Constructor con parámetros
    public Sesion(String nombre, Curso curso) {
        this.nombre = nombre;
        this.curso = curso;
        this.imagen = imagen;
        this.ruta = ruta;

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
    public String getImagen() {
        return imagen;
    }
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getRuta() {
        return ruta;
    }
    public void setRuta(String ruta) {
        this.ruta = ruta;
    }
}
