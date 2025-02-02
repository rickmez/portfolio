// import { Opacity } from '@mui/icons-material';
// import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css'
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const navRef = useRef();
    const [visible, SetVisible] = useState(true)

    const showNavBar = () =>{
        var navbar = document.querySelector('.navbar_responsive');
        if(navbar.style.display === 'block')
            navbar.style.display = 'none'
        else
            navbar.style.display = 'block'
    }

    return (  

        <header>

            <div className="drop-in-2">
                <Link to="/"><img className='logo' src="sota-de-treboles.png"></img> </Link>
                <nav ref={navRef}>
                    
                        <img 
                        onClick={showNavBar}
                        className="burger" 
                        src="burger-bar.png" 
                        alt="" />
                        
                        <div className='moreLinks'>
                            <div className='moreseegments'> 
                                <p className='hovermore'>Más</p>
                                <div className='segments'>
                                    <li><Link className='links_' to='/experienciaacademica'>Exp. Academica</Link></li>
                                    <li><Link className='links_' to='/publications'>Publicaciones</Link></li>
                                    <li><Link className='links_' to='/social'>Redes Sociales</Link></li>
                                </div> 
                            </div>
                            <Link className='links_' to='/Trabajos'>Experiencia</Link>
                            <Link className='links_' to='/Habilidades'>Habilidades</Link>
                            <Link className='links_' to='/Contacto'>Contacto</Link>    
                        </div>

                        <div className='navbar_responsive'>
                            <Link className='links_' to='/'>Inicio</Link>
                            <Link className='links_' to='/experienciaacademica'>Exp. Academica</Link>
                            <Link className='links_' to='/publications'>Publicaciones</Link>
                            <Link className='links_' to='/social'>Redes Sociales</Link>
                            <Link className='links_' to='/Trabajos'>Experiencia</Link>
                            <Link className='links_' to='/Habilidades'>Habilidades</Link>
                            <Link className='links_' to='/Contacto'>Contacto</Link> 
                        </div>

                </nav>
            </div>
        </header>

    );
}

export default NavBar;
