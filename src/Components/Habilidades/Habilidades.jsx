import './Habilidades.css'

function Habilidades() {
    return ( 
        <>
            <div className='page_container'>

                <h2> Habilidades y Certificaciones</h2>
                        
                <div className='cardcontainer'>
                    {/* ############ Bachiller  */}
                    
                    <div className='card'>
                        <div className='Cardimage'>
                            <img src="Utec.png" alt="" />
                        </div>

                        <div className='Cardcontent'>
                            <div className='Cardtitle'> 
                                <img src="el.png" alt="" /> 
                                <h3>Ingeniería Electrónica</h3>
                            </div>
                            
                            <div className='description'>
                                <p className='Uni'> Universidad de Ingeniería y Tecnología</p>
                                <p> Periodo de egreso: 2024-1 </p>
                                <b>Bachiller</b>
                            </div>
                        </div>
                    
                    </div>
                
                    {/* ############ AWS Cloud Practitioner */}

                    <div className='card'>
                        
                        <div className='Cardimage'>
                            <img className="aws" src="AWScertification.png" alt="" />
                        </div>

                        <div className='Cardcontent'>
                            <div className='Cardtitle'> 
                                <img src="social.png" alt="" /> 
                                <h3>AWS Certified Practitioner</h3>
                            </div>
                            
                            <div className='description'>
                                <p className='Uni'> AWS Certification</p>
                                <p>Experiencia en el tema: 2 años </p>
                                <b>Cerificación</b>
                            </div>
                        </div>
                    
                    </div>

                    {/* ###########  Python   ############### */}
                    <div className='card'>
                        
                        <div className='Cardimage'>
                            <img src="python.png" alt="" />
                        </div>

                        <div className='Cardcontent'>
                            <div className='Cardtitle'> 
                                <img src="kaggle.svg" alt="" /> 
                                <h3>Advanced Python Course</h3>
                            </div>
                            
                            <div className='description'>
                                <p className='Uni'> Kaggle</p>
                                <p> Experiencia en el tema: 4 años </p>
                                <b>Certificación</b>
                            </div>
                        </div>
                    
                    </div>

                    {/* ###########  Cisco IoT   ############### */}
                    <div className='card'>
                        
                        <div className='Cardimage'>
                            <img src="Cisco IoT.png" alt="" />
                        </div>

                        <div className='Cardcontent'>
                            <div className='Cardtitle'> 
                                <img src="cisco.jpg" alt="" /> 
                                <h3>Complete Cisco IoT Courses </h3>
                            </div>
                            
                            <div className='description'>
                                <p className='Uni'> Universidad de Ingeniería y Tecnología</p>
                                <p> Cursos: 120 horas </p>
                                <b>Curso</b>
                            </div>
                        </div>
                    
                    </div>

                    {/* ###########  Embebidos   ############### */}

                    <div className='card'>
                        
                        <div className='Cardimage'>
                            <img src="nodo.png" alt="" />
                        </div>

                        <div className='Cardcontent'>
                            <div className='Cardtitle'> 
                                <img src="el.png" alt="" /> 
                                <h3>Sistemas Embebidos</h3>
                            </div>
                            
                            <div className='description'>
                                <p className='Uni'> Universidad de Ingeniería y Tecnología</p>
                                <p> Experiencia en el tema: 1 año </p>
                                <b>Curso</b>
                            </div>
                        </div>
                    
                    </div>

                    <div className='card'>
                        
                        <div className='Cardimage'>
                            <img src="react.png" alt="" />
                        </div>

                        <div className='Cardcontent'>
                            <div className='Cardtitle'> 
                                <img src="web.png" alt="" /> 
                                <h3>Desarrollo web con React</h3>
                            </div>
                            
                            <div className='description'>
                                {/* <p className='Uni'> Universidad de Ingeniería y Tecnología</p> */}
                                <br />
                                <p> 1 año </p>
                                <b>Curso</b>
                            </div>
                        </div>
                    
                    </div>

                    <div className='card'>
                        
                        <div className='Cardimage'>
                            <img src="antenna.jpg" alt="" />
                        </div>

                        <div className='Cardcontent'>
                            <div className='Cardtitle'> 
                                <img src="el.png" alt="" /> 
                                <h3>Ingeniería Electromagnética</h3>
                            </div>
                            
                            <div className='description'>
                                <p className='Uni'> Universidad de Ingeniería y Tecnología</p>
                                <p> 1 año </p>
                                <b>Curso</b>
                            </div>
                        </div>
                    
                    </div>

                </div>

            </div>
        </>
     );
}

export default Habilidades;