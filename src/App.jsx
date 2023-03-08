import React from 'react'
import { useEffect, useState } from "react";

import Model from './components/Three'
import { Overlay } from './components/Overlay'
import  Menu  from './components/Menu'
import { Lines } from 'react-preloaders'
import './styles/app.scss'


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
      <section className="hero" >
        <div className="hero-wrapper" style={{ width: "100vw", height: "100vh" }}>
          <Model />
          <Overlay />
        </div>
          
      </section>
      
    </div>
      
  );
  

}

export default App