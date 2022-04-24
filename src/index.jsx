import React from 'react';
import { Welcome } from './componentes/welcome.jsx'
import { End } from './componentes/end.jsx'
import Login from './componentes/login.jsx'
import { Maze } from './componentes/maze.jsx'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

root.render(

    <Router>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/maze/:h/:w" element={<Maze />} />
            <Route path="/end" element={<End />} />
        </Routes>
    </Router>

)
