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
    const [nombre, setNombre] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const handleGoogleLogin = () => {
        // Redirige al endpoint OAuth2 configurado en Spring Boot
        window.location.href = "http://localhost:8080/oauth2/authorization/google";
    };


    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", {
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

    const handleRegister = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/auth/register", {
                nombre: nombre,
                email: email,
                fechaNacimiento: fechaNacimiento, // Formato: YYYY-MM-DD
                password: password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            alert("Usuario registrado exitosamente. Por favor, inicia sesión.");
            setIsLogin(true); // Cambia a la vista de login después del registro.
        } catch (error) {
            console.error("Error al registrar el usuario:", error);
            alert("Error al registrar el usuario. Verifica los datos ingresados.");
        }
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
                                <FaUser className="icon"/>
                                <input
                                    type="text"
                                    placeholder="Nombre completo"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <FaCalendarAlt className="icon"/>
                                <input
                                    type="date"
                                    placeholder="Fecha de nacimiento"
                                    value={fechaNacimiento}
                                    onChange={(e) => setFechaNacimiento(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <FaEnvelope className="icon"/>
                                <input
                                    type="email"
                                    placeholder="Correo electrónico"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <FaLock className="icon"/>
                                <input
                                    type="password"
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button className="login-button" onClick={handleRegister}> CREAR CUENTA </button>
                        </>
                    )}

                    <div className="social-login">
                        <button className="social-button google" onClick={handleGoogleLogin}>
                            <FaGoogle className="icon"/> Conectar con Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
