import "./Home.css"
import {useNavigate} from 'react-router-dom'


function Home() {
    const navigate = useNavigate();
    
    
    return (     
    <>    
      <div className="homepage">
        
        <div className="avatarSection">
          
            <div className="Enclosement">  
              
              <img className="avatar" src="avatar.png" alt="avatar.png"/>
              
              <div className="circle1">
                <div className="bubble">
                  <img src="Utec.png" alt="" />
                </div>
              </div>

              <div className="circle1">
                <div className="bubble1" >
                  <img src="react.png" alt="" />
                </div>
    
              </div>

              <div className="circle1">
                <div className="bubble2" >
                  <img src="el.png" alt="" />
                </div>
              </div>

              <div className="circle1">
                <div className="bubble3" >
                  <img src="social.png" alt="" />
                </div>  
              </div>
            
            </div>

        </div>

        <div className="section1">
          <h2 className="name">¡Hola! mi nombre es</h2>
          <h2>Ricardo Carbajal</h2>
          <p className="am">
            y soy un egresado de UTEC de
            la carrera de Ingeniería Electrónica 
            con una especialización en Ingeniería 
            de Computadoras. Tengo experiencia
            en Desarrollo Web, Cloud Computing, 
            proyectos de IoT, Telecomunicaciones y 
            Diseño de Videojuegos.
          </p>
        </div>

        <div className="showCards">

            <div onClick={()=>{
              navigate('/experienciaacademica')
            }} 
              className="cards">
             <span className="cards__title"> Experiencia Academica </span>
              <p className="cards__content">
                Un resumen de cursos y projectos universitarios relevantes a mi experiencia laboral 
              </p>
            </div>

            <div  onClick={()=>{
              navigate('/publications')
            }} 
            className="cards">
             <span className="cards__title"> Publicaciones </span>
              <p className="cards__content">
                  Durante mi tiempo en la universidad pude tener la oportunidad de estar involucrado en
                  divulgación científica como autor principal y contribuyente. 
              </p>
            </div>

            <div onClick ={()=>{
              navigate('/social')
            }}  
            className="cards">
             <span className="cards__title"> Redes Sociales </span>
             <p className="cards__content">
                Me interesa hacer recursos educativos sobre ciencia y tecnología y lo comparto,
                atra vez de mis redes
             </p>
            </div>

        </div>

      </div>  
    </>

    );

}



export default Home;