import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Model from './components/Three'
import { Overlay } from './components/Overlay'
import Menu from './components/Menu'
import UseDarkMode from './components/UseDarkMode'
import Experience from './components/Experience'

import About from './views/About'
import Skills from './views/Skills'
import Works from './views/Works'
import Footer from './components/Footer'


import './app.scss'


function App() {
  return (
    
    <div className='App'>
      <Menu></Menu>
      <UseDarkMode/>
      <section className="Hero" >
      <div className='background' style={{ width: "100%", height: "100vh" }}>
          <Model />
      </div>
        <Overlay />  
      </section>
      <About></About>
      <Skills></Skills>
      <Works></Works>
      <Experience/>
      <Footer />

    </div>
      
  );
  

}

export default App