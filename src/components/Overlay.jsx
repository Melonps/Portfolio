import '../styles/overlay.scss'
import '../index.css'

export function Overlay() {
  return (
    <div className='overlay'>
      <h1 className="absolute bottom-20 right-10 font-bold text-2xl sm:text-6xl lg:text-9xl md:right-20 text-right" >
        PRO<br/>
        CREATE
      </h1>
      <div className='absolute top-10 left-10 sm:text-sm md:text-lg md:left-20'>
        A DEV
        <br />
        UPDATED
      </div>
      <div className='absolute top-10 left-28 text-right sm:text-sm md:left-56  md:text-lg'>
        —
        <br />
        08/01/23
      </div>

      <div className='absolute bottom-20 left-10 sm:text-sm md:text-lg md:left-20'>
        Runtime caustics and soft shadows,
        <br />
        for more realism on the web.
        <br />
        <br />
        <div style={{ position: 'relative', marginTop: 10, display: 'inline-block' }}>
          <a style={{ fontWeight: 600, letterSpacing: 2 }} href="https://github.com/pmndrs/drei#caustics">
            DOCUMENTATION
          </a>
          <div style={{ marginTop: 6, height: 2.5, width: '100%', background: '#3e3e3d' }} />
        </div>
        <br />
      </div>
    </div>
  )
}
