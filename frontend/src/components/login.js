import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { FaGoogle, FaEnvelope, FaLock, FaUser, FaCalendarAlt } from 'react-icons/fa';

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleLogin = () => {
        // Aquí puedes agregar la lógica de autenticación
        navigate('/menu'); // Redirige al menú después de iniciar sesión
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
                        <img src="logi.png" alt="Logo" />
                    </div>
                    <h2 className="login-title">{isLogin ? 'Iniciar Sesión' : 'Crear cuenta'}</h2>
                    
                    {isLogin ? (
                        <>
                            <div className="input-group">
                                <FaEnvelope className="icon" />
                                <input type="text" placeholder="Correo electrónico" />
                            </div>
                            <div className="input-group">
                                <FaLock className="icon" />
                                <input type="password" placeholder="Contraseña" />
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
                            <button className="login-button">CREAR CUENTA</button>
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
