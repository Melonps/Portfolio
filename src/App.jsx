import React from 'react'

import Model from './components/Three'
import { Overlay } from './components/Overlay'

function App() {

return (
    <div className='App'>
      
      <section className="hero" >
        <div className="hero-wrapper" style={{ width: "100vw", height: "100vh" }}>
          <Model />
          <Overlay />
        </div>
        
      </section>
    </div>
    
  )
  

}

export default App