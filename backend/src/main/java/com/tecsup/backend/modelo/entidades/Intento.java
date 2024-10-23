package com.tecsup.backend.modelo.entidades;

import jakarta.persistence.*;

@Table (name = "intento")
@Entity
public class Intento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    @ManyToOne
    @JoinColumn(name = "pregunta_id", nullable = false)
    private Pregunta pregunta;
    @Column
    private String respuestaSeleccionada;
    @Column
    private Boolean esCorrecta;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Pregunta getPregunta() {
        return pregunta;
    }

    public void setPregunta(Pregunta pregunta) {
        this.pregunta = pregunta;
    }

    public String getRespuestaSeleccionada() {
        return respuestaSeleccionada;
    }

    public void setRespuestaSeleccionada(String respuestaSeleccionada) {
        this.respuestaSeleccionada = respuestaSeleccionada;
    }

    public Boolean getEsCorrecta() {
        return esCorrecta;
    }

    public void setEsCorrecta(Boolean esCorrecta) {
        this.esCorrecta = esCorrecta;
    }

    @Override
    public String toString() {
        return "Intento{" +
                "id=" + id +
                ", pregunta='" + pregunta + '\'' +
                ", respuestaSeleccionada='" + respuestaSeleccionada + '\'' +
                ", esCorrecta='" + esCorrecta +
                '}';
    }
}