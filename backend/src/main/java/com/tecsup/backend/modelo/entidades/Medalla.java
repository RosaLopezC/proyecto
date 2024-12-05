package com.tecsup.backend.modelo.entidades;
import jakarta.persistence.*;

@Entity
@Table(name = "medallas")
public class Medalla {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "sesion_id", nullable = false)
    private Sesion sesion;

    @Column(nullable = false)
    private String tipo; // Bronce, Plata, Oro

    // Constructor por defecto
    public Medalla() {
    }

    public Medalla(Usuario usuario, Sesion sesion, String tipo) {
        this.usuario = usuario;
        this.sesion = sesion;
        this.tipo = tipo;
    }

    // Getters y setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Sesion getSesion() {
        return sesion;
    }

    public void setSesion(Sesion sesion) {
        this.sesion = sesion;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}