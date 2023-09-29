import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProyectDetail from '../components/ProyectDetail/index';

function AppRoutes() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/category/:categoryId' element={<HomePage/>}/>
                <Route path='/proyect/:id' element={<ProyectDetail/>}/>
                <Route path='*' element={<h1>Pagina no disponible</h1>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRoutes;