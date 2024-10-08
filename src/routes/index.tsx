import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../home/home'

const Rotas = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas