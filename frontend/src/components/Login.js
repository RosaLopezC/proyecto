import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { FaGoogle, FaEnvelope, FaLock, FaUser, FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/login", {
                username: email,
                password: password
            });

            // Guarda el token en el almacenamiento local o en el estado de la aplicación
            localStorage.setItem("token", response.data.token);

            // Redirige al menú después de iniciar sesión
            navigate('/menu');
        } catch (error) {
            console.error("Error en el inicio de sesión:", error);
            alert("Error en el inicio de sesión. Por favor, verifica tus credenciales.");
        }
    };

    const handleRegister = () => {
        // Lógica de registro (puede implementarse después)
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-sidebar">
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`sidebar-button ${isLogin ? 'active' : ''}`}>
                        INICIAR SESIÓN
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`sidebar-button ${!isLogin ? 'active' : ''}`}>
                        REGISTRARSE
                    </button>
                </div>
                <div className="login-form">
                    <div className="logo">
                        <img src="logo.png" alt="Logo" />
                    </div>
                    <h2 className="login-title">{isLogin ? 'Iniciar Sesión' : 'Crear cuenta'}</h2>

                    {isLogin ? (
                        <>
                            <div className="input-group">
                                <FaEnvelope className="icon" />
                                <input
                                    type="text"
                                    placeholder="Correo electrónico"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <FaLock className="icon" />
                                <input
                                    type="password"
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
                            <button className="login-button" onClick={handleLogin}>INICIAR SESIÓN</button>
                        </>
                    ) : (
                        <>
                            <div className="input-group">
                                <FaUser className="icon" />
                                <input type="text" placeholder="Nombre completo" />
                            </div>
                            <div className="input-group">
                                <FaCalendarAlt className="icon" />
                                <input type="text" placeholder="Fecha de nacimiento (dd/mm/aaaa)" />
                            </div>
                            <p className="fecha-explicacion">
                                Tener en cuenta tu edad te garantiza una experiencia adaptada en Matplay.
                                Para más información, consulta nuestra
                                <a href="#" className="registro-link"> Política de privacidad.</a>
                            </p>
                            <div className="input-group">
                                <FaEnvelope className="icon" />
                                <input type="email" placeholder="Correo electrónico" />
                            </div>
                            <div className="input-group">
                                <FaLock className="icon" />
                                <input type="password" placeholder="Contraseña" />
                            </div>
                            <button className="login-button" onClick={handleRegister}>CREAR CUENTA</button>
                        </>
                    )}

                    <div className="social-login">
                        <button className="social-button google">
                            <FaGoogle className="icon" /> Conectar con Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
