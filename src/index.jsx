/* eslint-disable import/extensions */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Welcome from './componentes/welcome.jsx'
import End from './componentes/end.jsx'
import Login from './componentes/login.jsx'
import Maze from './componentes/maze.jsx'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Router basename="">
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/maze/:h/:w" element={<Maze />} />
      <Route path="/end" element={<End />} />
    </Routes>
  </Router>,
)
