import React, { useEffect, useState } from "react";
import axios from "axios";

function MyComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/data")  // URL de Spring Boot
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <h1>Data from Django API (via Spring Boot)</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </div>
    );
}

export default MyComponent;
