import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/pages/Inicio/Inicio';
import Preguntas from './components/pages/Preguntas/Preguntas';
import Cambios from './components/pages/Cambios/Cambios';
import Contacto from './components/pages/Contacto/Contacto';
import Productos from './components/pages/Productos/Productos';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ItemDetailContainer />} />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/cambios" element={<Cambios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
