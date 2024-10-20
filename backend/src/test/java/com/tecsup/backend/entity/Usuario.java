@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String correo;
    private String contrasena;
    private String tipoCuenta; // estudiante, apoderado, etc.

    // Getters y Setters
}
