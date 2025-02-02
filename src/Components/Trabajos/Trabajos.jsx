import './Trabajos.css'
import { useRef } from 'react';


function Trabajos() {
    
    return ( 

        <>
        
        <h1 className='trabajo_title'>Experiencia Laboral</h1>
        <div className='Work_Container'>
            
            <div className='LatestJob'>
                
                <div className='titleDrop'>
                    <div className='cardLoad'>
                        <img className="DevLogo" src="computer.gif" alt="" />
                    </div>
                </div>
                
                <div className='titleDrop'>
                    <div className='Cardtitle'>
                        <h1>Open Source Developer</h1>
                        <h2>Freelance</h2>  
                        <h4> <img src="calendario.png" alt="" /> Ene 2023 - presente</h4>
                    </div>
                    
                    <p className='text_'>
                         Desde hace más de un año comparto lo que aprendo en la universidad desde cursos relacionados en electrónica. telecomunicaciones, matemática, ciencias de las computación y mi trabajo de tesis
                    </p>

                    <div className='links'>
                        <img src="github-logo.png" alt="" />
                        <img src="medium.png" alt="" />
                        <img src="linkedin.png" alt="" />
                        <img src="instagram.png" alt="" />
                    </div>

                </div>
            </div>


            <div className='experience'>

                <div className='exp_content'>
                    <div className='Cardtitle'>
                        <h1>Cloud y Database Trainee</h1>
                        <h2>Manantial Tecnológico</h2>  
                        <h4> <img src="calendario.png" alt="" /> jun 2022 - dec 2022</h4>
                    </div>
                    
                    <div className='text_'>
                        <ul>
                            <li>Desarrollé sistemas de software para ayudar a los colaboradores de
                                la empresa y clientes con el fin de mejorar su rendimiento en
                                actividades de negocio y recortar tiempos en más de 50%</li>
                            <li>
                                Elaboré reportes de costos y documentación detallando el uso de varios servicios/soluciones para varios clientes/partners de la empresa.
                            </li>
                            <li>
                                Lideré el desarrollo un software para automáticamente guardar información de
                                Jira en AWS S3 para luego mostrar los datos en un dashboard de en
                                AWS Quick Sight estilo PowerBI.
                            </li>
                        </ul>
                    </div>

                    <div className='links'>
                        <img src="API-Gateway.png" alt="" />
                        <img src="Lambda.png" alt="" />
                        <img src="S3.png" alt="" />
                        <img src="DynamoDB.png" alt="" />
                        <img src="Cognito.png" alt="" />
                        <img src="IAM.png" alt="" />
                    </div>
                </div>

                <div className='cardPresentation'>
                        <img className="DevLogo" src="manantial.png" alt="" />
                </div>

            </div>

            <div className='experience'>
                <div className='cardPresentation'>
                    <img className="DevLogo" src="UTEC-Logo.png" alt="" />
                </div>

                <div className='exp_content'>
                    <div className='Cardtitle'>
                        <h1>Asistente de Investigación</h1>
                        <h2>Universidad de Ingeniería y Tecnología</h2>  
                        <h4> <img src="calendario.png" alt="" /> Sep 2021 - dec 2021</h4>
                    </div>
                    
                    <div className='text_'>
                    <ul>
                            <li>
                            Aporté para la construcción de un aplicativo web para el monitoreo de
                            niveles de dióxido de nitrógeno(NO2) Utilizando NodeJs, Google
                            Earth Engine y el Sentinel-5P. El proyecto se realizó en 2 meses
                            </li>
                            <li>
                                Lancé el aplicativo utilizando Heroku y GitHub
                            </li>
                            <li>
                                Realicé documentación para el uso de la aplicativo
                            </li>
                        </ul>
                    </div>

                    <div className='links'>
                        <img src="Sentinel.png" alt="" />
                        <img src="gee.png" alt="" />
                        <img src="heroku.png" alt="" />
                        <img src="JavaScript.png" alt="" />
                    </div>
                </div>

            </div>

        
        
        
        </div>

        

        </>

    );
}

export default Trabajos;

{/* <a href="https://www.flaticon.com/free-icons/lambda" title="lambda icons">Lambda icons created by shohanur.rahman13 - Flaticon</a> */}