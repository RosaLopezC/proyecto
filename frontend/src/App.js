import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login'; // Asegúrate de que esté importado

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                {/* Agrega otras rutas aquí */}
            </Routes>
        </Router>
    );
}

export default App;
