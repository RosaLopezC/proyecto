import React from "react";
import './login.css';  // Asegúrate de tener un archivo CSS para los estilos
import logo from '../assets/logo.png';  // Importa el logo
import gifImage from '../assets/tugiff.gif';  // Importa el GIF

function Login() {
    return (
        <div className="login-container">
            <div className="logo-container">
                <img src={logo} alt="MathPlay Logo" className="logo" />
            </div>
            <div className="content-container">
                <div className="image-container">
                    <img src={gifImage} alt="Math image" className="main-image" />
                </div>
                <div className="form-container">
                    <h1 className="title">¡La forma divertida, efectiva y gratis de aprender!</h1>
                    <div className="buttons-container">
                        <a href="/registro" className="btn-register">¡Regístrate!</a>
                        <a href="/login" className="btn-login">Ya Tengo una Cuenta</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
