import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RedirectHandler() {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                // Solicitar información del usuario después de la autenticación
                const response = await axios.get("http://localhost:8080/api/userinfo", {
                    withCredentials: true, // Si tu backend usa cookies para el token
                });

                // Si la autenticación es exitosa, redirige al menú
                console.log("Usuario autenticado:", response.data);
                navigate('/menu');
            } catch (error) {
                console.error("Error al obtener información del usuario:", error);
                navigate('/'); // Redirige de vuelta al login si hay un error
            }
        };

        fetchUserInfo();
    }, [navigate]);

    return <div>Autenticando...</div>;
}

export default RedirectHandler;
