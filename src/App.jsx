import React from 'react'
import { useEffect, useState } from "react";

import Model from './components/Three'
import { Overlay } from './components/Overlay'
import Menu from './components/Menu'

import About from './views/About'


import { Lines } from 'react-preloaders'
import './app.scss'


function App() {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
      setTimeout(() => setIsloading(false), 2000);
    });

  if (isLoading)
    return (
      <Lines></Lines>
    );
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

    </div>
      
  );
  

}

export default App