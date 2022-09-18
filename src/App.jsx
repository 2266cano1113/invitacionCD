import { useState, useEffect } from 'react'
import './App.scss'
import principal from "./assets/img/cdZoologico.jpg";
import sobre from "./assets/img/sobre.png";
import AOS from 'aos';
import "react-h5-audio-player/lib/styles.css";
import 'aos/dist/aos.css';
import DateCountdown from 'react-date-countdown-timer';
import musica from "./assets/audio/saborAmi.mp3";


function App() {
  const [sobreCerrado, setsobreCerrado] = useState(true)
  const [sobreP, setSobreP] = useState(false)
  const [playM, setPlay] = useState(true)
  const [permiso, setPermiso] = useState(false)
  const pathname = window.location.pathname
  const [invitado, setInvitado] = useState({
    familia: '',
    invitados: '',
    codigo: '',
    tipo: '',
  })
  // const playPuase = () => {

  // }
  function cambio() {
    setSobreP(true)
    setTimeout(function () {
      setsobreCerrado(false)
    }, 200);
  }
  const invitados = [{
    familia: 'Cano Bahena',
    invitados: '2',
    codigo: '2226224',
    tipo: 'familia',
  }, {
    familia: 'Gongora Reyes',
    invitados: '5',
    codigo: '5466739',
    tipo: 'familia',
  }, {
    familia: 'Cano Cano',
    invitados: '3',
    codigo: '3226226',
    tipo: 'familia',
  }, {
    familia: 'Bahena Hernandez',
    invitados: '3',
    codigo: '3224437',
    tipo: 'familia',
  }, {
    familia: 'Daniela Bahena',
    invitados: '2',
    codigo: '2326224',
    tipo: '',
  }, {
    familia: 'Abuelita Tencha',
    invitados: '2',
    codigo: '2228836',
    tipo: '',
  }, {
    familia: 'Cano',
    invitados: '',
    codigo: '02266',
    tipo: 'Familia',
  }]
  useEffect(() => {

    console.log('esto es el link: ' + pathname.slice(14, pathname.length))
    invitado.codigo !== pathname.slice(14, pathname.length) ? (
      invitados.map((index) => (
        pathname.slice(14, pathname.length) === index.codigo ? (
          setInvitado(index),
          setPermiso(true)
          ) : (null),
        console.log('esto es el mapeo: ' + index.codigo)
      ))
    ) : null
  })



  AOS.init();
  return (
    <div className="App">
      {permiso ? (
        sobreCerrado ? (
          <div className='hero'>
            <div className={!sobreP ? ('sobre') : ('sobreP')}>
              <div className='informacion' onClick={() => { cambio() }}>
                <p><span> Para {invitado.tipo}:</span> <span className='familia'>{invitado.familia}</span> </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className='header'>
              {/* <header style={{ backgroundImage: ` linear-gradient(50deg, transparent,rgba(192, 158, 22, 0.5)), linear-gradient(-200deg, rgba(192, 158, 22, 0.5), transparent), url(${principal})` }}> */}
              {/* <header> */}
              <h2>¡Nuestra boda!</h2>
              <h1>Diana
                <span className='animationPink'>
                  <svg width="50" height="50" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </span>Edgar</h1>
              {playM ? (
                <audio src={musica} autoPlay loop> </audio>
              ) : (
                null
              )}
              <button onClick={() => { setPlay(!playM) }}>
                {playM ? (
                  <svg width="20" height="20" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16" onClick={() => { setPlay(!playM) }}>
                    <path fill='#ffffff' d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                  </svg>
                ) : (
                  <svg width="20" height="20" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16" onClick={() => { setPlay(!playM) }}>
                    <path fill='#ffffff' d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                )
                }
              </button>
              <div className='fotoCD'>
              </div>
              <div className="fecha">
                <DateCountdown numberOfFigures='5' dateTo='December 24, 2022 15:00:00 GMT -5' locales={['', '', '', '', '', '']} locales_plural={['', '', '', '', '', '']} />
                <div className='fechaTxt'>
                  <span>Meses</span>
                  <span>Dias</span>
                  <span>Hrs</span>
                  <span>Min.</span>
                  <span>Seg.</span>
                </div>
              </div>
              {/* <DateCountdown className={''} dateTo='2022-12-24' locales={['año','mes','dia','hora','minuto','segundo']} locales_plural={['años','meses','dias','horas','minutos','segundos']}/> */}
            </div>
            <main>
              <section className='invitado'>
                <h2>¡Hola {invitado.tipo + ' ' + invitado.familia}!</h2>
                {invitado.invitados !== '' ? (<p>Pases para <span>{invitado.invitados}</span> personas</p>) : null}
              </section>
            </main>
          </>
        )
      ) : (
        <div className='hero'>
          <div className="problema">
            <div className="mensaje">
              <div className="text">
              <p>enlace incompleto</p>
              <p>solicite ayuda al: </p>
              <a href="tel:+527331054723">7331054723</a>
              </div>
            </div>
          </div>
        </div>)}
    </div >
  )
}

export default App
