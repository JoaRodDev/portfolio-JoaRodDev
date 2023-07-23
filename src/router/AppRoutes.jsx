import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import HomePagePrueba from '../pages/HomePagePrueba';
import HomePagePrubaTwo from '../pages/HomePagePrubaTwo';

function AppRoutes() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/prueba' element={<HomePagePrubaTwo/>}/>
                <Route path='*' element={<h1>Pagina no disponible</h1>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRoutes;