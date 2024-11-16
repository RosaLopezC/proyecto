import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Función para obtener los datos de la API
        const fetchData = async () => {
            try {
                const response = await axios.get('https://apipi-j6ql.onrender.com/api/niveles-academicos/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;

    if (!data.length) return <p>No data available.</p>;

    return (
        <table border="1">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id_nivel_academico}>
                    <td>{item.id_nivel_academico}</td>
                    <td>{item.nombre}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
