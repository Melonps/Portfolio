import '../styles/overlay.scss'

export function Overlay() {
  return (
    <div className='overlay'>
      <div className="char" style={{ bottom: 90, right: "4vw" }}>
        PRO<br/>
        CREATE
      </div>
      <div style={{ position: 'absolute', top: 40, left: "8vw", textAlign: 'left' }}>
        A DEV
        <br />
        UPDATED
      </div>
      <div style={{ position: 'absolute', top: 40, left: "20vw", textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
        —
        <br />
        08/01/23
      </div>
      <div style={{ position: 'absolute', bottom: 90, left: "8vw" }}>
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
