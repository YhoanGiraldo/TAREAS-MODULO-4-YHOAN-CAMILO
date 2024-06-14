
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import './App.css'

import Ricky from "../src/assets/ricky.png"
import Home from './pages/Home';
import ListaRicky from './pages/ListaRicky';
import IndividualPersonaje from './pages/IndividualPersonaje';
import Capitulos from './pages/Capitulos'





function App() {

  
  return (

    <Router>
      
      <img className='imagen_principal' src={Ricky}/>

      <div className='ubicacion_botones'>
        <nav>
          <div className='botonesP'>
              <Link to="/" > INICIO </Link>
          </div>
          <div  className='botonesP'>
              <Link to="/lista" > LISTA y FILTRO</Link>
          </div>
          <div className='botonesP'>
              <Link to="/PersonIndividual" >PERSONAJE INDIVIDUAL</Link>
          </div>
          <div className='botonesP'>
              <Link to="/capitulos" > CAPITULOS</Link>
          </div>
        </nav>
      </div>

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/lista' element={<ListaRicky />} />

        <Route path='/personIndividual' element={<IndividualPersonaje />} />

        <Route path='/capitulos' element={<Capitulos />} />

      </Routes>
    </Router>
  
  )
};
export default App
