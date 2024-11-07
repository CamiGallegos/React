import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Inicio } from './components/pages/Inicio/Inicio';
import { Productos } from './components/pages/Productos/Productos';
import { Preguntas } from './components/pages/Preguntas/Preguntas';
import { Cambios } from './components/pages/Cambios/Cambios';
import { Contacto } from './components/pages/Contacto/Contacto';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/preguntas" element={<Preguntas />} />
          <Route path="/cambios" element={<Cambios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;