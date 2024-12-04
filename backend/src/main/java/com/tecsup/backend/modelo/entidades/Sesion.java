package com.tecsup.backend.modelo.entidades;

import jakarta.persistence.*;

@Entity
public class Sesion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private int puntaje;

    @ManyToOne
    @JoinColumn(name = "curso_id", nullable = false)  // Relación con Curso (clave foránea)
    private Curso curso;

    // Constructor por defecto
    public Sesion() {
    }

    // Constructor con parámetros
    public Sesion(String nombre, int puntaje, Curso curso) {
        this.nombre = nombre;
        this.puntaje = puntaje;
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

    public int getPuntaje() {
        return puntaje;
    }

    public void setPuntaje(int puntaje) {
        this.puntaje = puntaje;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    // Método para calcular el puntaje en función del tiempo
    public static int calcularPuntaje(long tiempoEnMilisegundos) {
        // El tiempo está en milisegundos. Por ejemplo, si el juego tarda 5 minutos (300000 ms)
        // Se calcula el puntaje de acuerdo al tiempo: menos tiempo, más puntos.
        int puntaje = (int) (200 - (tiempoEnMilisegundos / 1000)); // Penaliza por cada segundo que pasa

        // El puntaje no puede ser mayor de 200 puntos
        return Math.max(puntaje, 0); // Asegura que no haya puntajes negativos
    }
}
