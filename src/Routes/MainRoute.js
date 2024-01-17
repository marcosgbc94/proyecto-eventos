import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Perfil from '../Components/Perfil';
import Inicio from '../Components/Inicio';
import Evento from '../Components/Evento';
import NotFound from '../Components/NotFound';

const MainRoute = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/registro" element={<Perfil />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/evento" element={<Inicio />} />
            <Route path="/evento/:id" element={<Evento />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default MainRoute