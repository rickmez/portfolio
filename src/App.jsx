// import { useState } from 'react';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Trabajos from './Components/Trabajos/Trabajos';
import Habilidades from './Components/Habilidades/Habilidades';
import Academic from './Components/Academic/Academic';
import Publication from './Components/Publications/Publication';
import Socials from './Components/Socials/Socials'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

function App() {

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // const particlesLoaded = (container) => {
  //   // console.log(container);
  // };

  const options = useMemo(
    () => ({
      background: {
        color: {
          zIndex: -100,
          value: "#171614",
        },
      },
      fpsLimit: 35,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.1,
          },
        },
      },
      particles: {
        zIndex: -100,
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.25,
          width: 0.4,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 50,
        },
        opacity: {
          value: 0.25,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  

  return (
    <>

        {/* <div className='particles'> */}
          <Particles
              id="tsparticles"
              // particlesLoaded={particlesLoaded}
              options={options}
            />
        {/* </ */}
    
      <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Trabajos' element ={<Trabajos/>} />
            <Route path='/Habilidades' element ={<Habilidades/>} />
            <Route path='/Contacto' element ={<Contact/>} />
            <Route path='/experienciaacademica' element ={<Academic/>} /> 
            <Route path='/publications' element ={<Publication/>} />   
            <Route path='/social' element ={<Socials/>} />   
        </Routes>

    </>
  )
}

export default App
