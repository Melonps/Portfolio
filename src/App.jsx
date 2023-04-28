import React, { lazy, Suspense, useEffect, useState } from 'react'

import Model from './components/Three'
import { Overlay } from './components/Overlay'
import Menu from './components/Menu'
import Experience from './views/Experience'

import About from './views/About'
import Skills from './views/Skills'
import Works from './views/Works'
import Footer from './components/Footer'


import './app.scss'


function App() {
  return (
    
    <div className='App'>
      <Menu></Menu>
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