package com.tecsup.backend.modelo.entidades;

import jakarta.persistence.*;

@Entity
@Table(name = "puntaje")
public class Puntaje {
    //El puntaje por cada sesión se calculará sumando los puntajes del usuario relacionados a la sesion correspondiente
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "sesion_id", nullable = false) // Relación con Sesion
    private Sesion sesion;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false) // Relación con Usuario
    private Usuario usuario;

    @Column(nullable = false)
    private int puntuacionObtenida;

    // Constructor por defecto
    public Puntaje() {
    }

    // Constructor con parámetros
    public Puntaje(Sesion sesion, Usuario usuario, int puntuacionObtenida) {
        this.sesion = sesion;
        this.usuario = usuario;
        this.puntuacionObtenida = puntuacionObtenida;
    }

    // Getters y setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Sesion getSesion() {
        return sesion;
    }

    public void setSesion(Sesion sesion) {
        this.sesion = sesion;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public int getPuntuacionObtenida() {
        return puntuacionObtenida;
    }

    public void setPuntuacionObtenida(int puntuacionObtenida) {
        this.puntuacionObtenida = puntuacionObtenida;
    }
}
