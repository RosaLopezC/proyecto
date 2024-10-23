package com.tecsup.backend.modelo.entidades;

import jakarta.persistence.*;

import java.math.BigDecimal;
@Table(name = "leccion")
@Entity
public class Leccion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String titulo;
    @Column
    private String descripcion;
    @Column
    @ManyToOne
    @JoinColumn(name = "nivel_dificultad_id", nullable = false)
    private Dificultades nivelDificultad;
    @Column
    @ManyToOne
    @JoinColumn(name = "tema_id", nullable = false)
    private Tema tema;
    @Column
    private BigDecimal puntosObtenidos;
    @Column
    private Integer orden;

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

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Dificultades getNivelDificultad() {
        return nivelDificultad;
    }

    public void setNivelDificultad(Dificultades nivelDificultad) {
        this.nivelDificultad = nivelDificultad;
    }

    public Tema getTema() {
        return tema;
    }

    public void setTema(Tema tema) {
        this.tema = tema;
    }

    public BigDecimal getPuntosObtenidos() {
        return puntosObtenidos;
    }

    public void setPuntosObtenidos(BigDecimal puntosObtenidos) {
        this.puntosObtenidos = puntosObtenidos;
    }

    public Integer getOrden() {
        return orden;
    }

    public void setOrden(Integer orden) {
        this.orden = orden;
    }

    @Override
    public String toString() {
        return "Grado{" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", nivelDificultad='" + nivelDificultad + '\'' +
                ", tema='" + tema + '\'' +
                ", puntosObtenidos='" + puntosObtenidos + '\'' +
                ", orden='" + orden +
                '}';
    }
}
