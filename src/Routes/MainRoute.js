import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Perfil from '../Components/Perfil';
import Inicio from '../Components/Inicio';
import Evento from '../Components/Evento';

const MainRoute = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/registro" element={<Perfil />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/evento" element={<Evento />} />
        </Routes>
    </BrowserRouter>
  )
}

export default MainRoute