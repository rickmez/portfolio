import React from 'react'
import './Socials.css'

const Socials = () => {
  return (
    <div className='socials_'>
       <h2> Redes Sociales </h2>
       <p>Actualizar mi página web aveces toma tiempo pero en mis otras redes sociales está actualizado todo lo que subo sobre mis proyectos </p>
       
       <div className='imagenes'>
        
        <a target='_blank' href="https://medium.com/@riccmezz"><img src="medium.png" alt="" /> Medium</a>
        <a target='_blank' href="https://github.com/rickmez"><img src="github-logo.png" alt="" /> GitHub</a>
        <a target='_blank' href="https://www.linkedin.com/in/ricardo-carbajal-mezarina/"><img src="linkedin.png" alt="" /> LinkedIn</a>
        <a target='_blank' href="https://www.instagram.com/ricknotsanchez_/"><img src="instagram.png" alt="" /> Medium</a>
       
       </div>
    </div>
  )
}

export default Socials
