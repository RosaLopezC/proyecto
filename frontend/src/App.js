import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </Router>
    );
}

export default App;
