import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu';
import TeoriaNumeros from './pages/TeoriaNumeros';
import TeoriaSumasRestas from './pages/TeoriaSumasRestas';
import TeoriaSecuencias from './pages/TeoriaSecuencias';
import TeoriaGeometria from './pages/TeoriaGeometria';
import TeoriaFracciones from './pages/TeoriaFracciones';
import TeoriaDivision from './pages/TeoriaDivision';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/teoria-numeros" element={<TeoriaNumeros />} />
                <Route path="/teoria-sumas-restas" element={<TeoriaSumasRestas />} />
                <Route path="/teoria-secuencias" element={<TeoriaSecuencias />} />
                <Route path="/teoria-geometria" element={<TeoriaGeometria />} />
                <Route path="/teoria-fracciones" element={<TeoriaFracciones />} />
                <Route path="/teoria-division" element={<TeoriaDivision />} />
            </Routes>
        </Router>
    );
}

export default App;
