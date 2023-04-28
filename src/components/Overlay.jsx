import '../styles/overlay.scss'
import '../index.css'

export function Overlay() {
  return (
    <div className='overlay'>
      <h1 className="absolute bottom-20 right-10 font-bold text-2xl sm:text-6xl lg:text-9xl md:right-20 text-right" >
        PRO<br/>
        CREATE
      </h1>
      <div className='absolute top-10 left-10 sm:text-sm md:text-lg md:left-20 font-medium'>
        A DEV
        <br />
        UPDATED
      </div>
      <div className='absolute top-10 left-28 text-right sm:text-sm md:left-56  md:text-lg font-medium'>
        22/12/28
        <br />
        23/04/28
      </div>

      <div className='absolute bottom-20 left-10 sm:text-sm md:text-lg md:left-20 font-medium'>
        Banriのポートフォリオサイト
        <br />
        経歴、制作物、スキルをまとめています
        <br />
        <br />
        <div style={{ position: 'relative', marginTop: 10, display: 'inline-block' }}>
          <a style={{ fontWeight: 600, letterSpacing: 1 }} href="https://github.com/pmndrs/drei#caustics">
            Thank you for coming!
          </a>
          <div style={{ marginTop: 6, height: 2.5, width: '100%', background: '#3e3e3d' }} />
        </div>
        <br />
      </div>
    </div>
  )
}
