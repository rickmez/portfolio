import React from 'react'
import './Academic.css'

const Academic = () => {

  const ActivateResumen = (e) =>{
    var parent = ((e.target.parentElement).parentElement)
    const child = parent.children;
    const resumen = (child[1]);
    const proyecto = (child[2]);
    const infociclo = (child[3]);
    
    if (resumen.style.display==="" || resumen.style.display==="none"){
      resumen.style.display = "block"
      proyecto.style.display="none"
      infociclo.style.display="none"
    }    
  }
  const ActivateProyecto = (e) =>{
    var parent = ((e.target.parentElement).parentElement)
    const child = parent.children;
    const resumen = (child[1]);
    const proyecto = (child[2]);
    const infociclo = (child[3]);
    
    if (proyecto.style.display==="" || proyecto.style.display==="none"){
      resumen.style.display = "none"
      proyecto.style.display="block"
      infociclo.style.display="none"
    }    
  }

  const ActivateCiclo = (e) =>{
    var parent = ((e.target.parentElement).parentElement)
    const child = parent.children;
    const resumen = (child[1]);
    const proyecto = (child[2]);
    const infociclo = (child[3]);
    
    if (infociclo.style.display==="" || infociclo.style.display==="none"){
      resumen.style.display = "none"
      proyecto.style.display="none"
      infociclo.style.display="block"
    }    
  }

  return (
    <div className='academic_container'>
      <h2 className='academictitle'>Experiencia Académica</h2>
      <p>En esta sección describo mi experiencia académica relevante como proyectos cursos y desempeño </p>

      <div className='holder'>

        <div className='cards_'>
          
          <div className='section'>
            <div className='title'><h3>EL0046 - Ingeniería Electromagnética</h3></div>
            <div className='imgcontainer'> <img src="EM.jpeg" alt="" /> </div>
            <div className='content'>
              
              <div className='contentButtons'>
                <button onClick={ActivateResumen} className='cardContentButton'> Resumen </button>
                <button onClick={ActivateProyecto} className='cardContentButton'> Proyecto </button>
                <button onClick={ActivateCiclo} className='cardContentButton'> Información del Ciclo </button>
              </div>

              <div className='Resumen'>
                En es curso, parte de la mención de telecomunicaciones, se tocan los temas de
                propagación de las ondas, líneas de transmisión, parámetros S, teoría y
                diseño de antenas. Otros temas incluyen las ecuaciones de Maxwell, las pérdidas y
                atenuaciones de propagación en homogéneos y no homogéneos, la medición de la señal
                de RF, adaptación de impedancias y aplicaciones de la Carta de Smith 
              </div>

              <div className='Proyecto'>
                El proyecto del curso implicaba realizar el diseño, implementación, testeo y calibración
                de una antena logarítmica utilizando <b>Matlab</b>. Uno de los requerimientos para poder 
                corroborar el correcto diseño fue el VSWR o ROE alcanzado, que fue de <b>1.048 en 3.33 GHz</b>
                y de <b>1.079 para 2.28 GHz</b>, para mayor contexto lo mejor que se puede alcanzar es un VSWR de 1.00
              </div>

              <div className='infodelciclo'>
                <ul>
                  <li><b>Ciclo:</b> 2024-I</li>
                  <li><b>Nota Final:</b> 17</li>
                  <li><b>Ranking del Periodo:</b> Quinto Superior</li>
                </ul>
              </div>
            
            </div>
          </div>

          <div className='section'>
            <div className='title'> <h3>EL5102 - Proyecto Final de Carrera (Tesis)</h3> </div>
            <div className='imgcontainer'> <img src="Framework.png" alt="" /></div>
            <div className='content'>
              <div className='contentButtons'>
                <button onClick={ActivateResumen} className='cardContentButton'> Resumen </button>
                <button onClick={ActivateProyecto} className='cardContentButton'> Proyecto </button>
                <button onClick={ActivateCiclo} className='cardContentButton'> Información del Ciclo </button>
              </div>
              
              <div className='Resumen'>
                Para mi tesis de bachiller, realicé una exhaustiva comparativa entre redes convolucionales - CNNs 
                y transformers visuales - ViT. Desarrollé un framework basado en una red siamés y diferentes 
                transformer encoders, el ViT clásico, el Poolformer y el ViT con bloques de Locality Self Atenttion y 
                Shifted Path Tokenization. 

              </div>

              <div className='Proyecto'>
                Para el desarrollo de este modelo de inteligencia artificial se utilizó la GPU T4 de Google Colab, 
                en total se entrenaron 5 modelos para decidir cual era el mejor. El modelo que mejor performacia 
                tuvo en 2 bases de datos fue el ViT con SPT y LSA 
              </div>

              <div className='infodelciclo'>
                <ul>
                  <li><b>Ciclo:</b> 2023-I y 2023-II</li>
                  <li><b>Nota Final:</b> 18 </li>
                  <li><b>Ranking del Periodo:</b> Décimo Superior</li>
                </ul>
              </div>

            </div>
          </div>

          <div className='section'>
            <div className='title'> <h3> EL0052 - Sistemas Embebidos e Interconectados </h3> </div>
            <div className='imgcontainer'> <img src="lorae32.jpg" alt="" /></div>
            <div className='content'>
                <div className='contentButtons'>
                  <button onClick={ActivateResumen}  className='cardContentButton'> Resumen </button>
                  <button onClick={ActivateProyecto} className='cardContentButton'> Proyecto </button>
                  <button onClick={ActivateCiclo} className='cardContentButton'> Información del Ciclo </button>
                </div>
              
                <div className='Resumen'>
                  Este curso es continuación de introducción sistemas embebidos, es este curso
                  se profundisa en procesadores y microcontroladores. Se vieron temas como 
                  <b>Comunicaciones Intrachip</b>, <b>Protocolos de Comunicación Cableadas e Inámbricas</b> como 
                  UART, I2C, CAN, BlueTooth, LoRa etc. Además se cubrieron temas de criptografía, seguridad de datos
                  y diseño de arquitecturas IoT. 
                </div>

                <div className='Proyecto'>
                  Para el proyecto del curso, se utilizó un nodo con un Atmega 328p como microcontrolador principal, 
                  que obtenía datos de un sensor IMU por medio de I2C, guardaba los datos en una memoria EEPROM por SPI y 
                  utilizaba UART para mandar los datos a un módulo LoRa E32 para comunicación inalámbrica con un gateway central
                  basado en un FPGA.
                </div>

                <div className='infodelciclo'>
                  <ul>
                    <li><b>Ciclo:</b> 2023-II</li>
                    <li><b>Nota Final:</b> 14 </li>
                    <li><b>Ranking del Periodo:</b> Décimo Superior</li>
                  </ul>
                </div>

            </div>
          </div>

          <div className='section'>
            <div className='title'> <h3>EL0078 - Técnicas en Redes IP</h3> </div>
            <div className='imgcontainer'> <img src="GNS3_logo.png" alt="" /></div>
            <div className='content'>
                <div className='contentButtons'>
                  <button onClick={ActivateResumen}  className='cardContentButton'> Resumen </button>
                  <button onClick={ActivateProyecto} className='cardContentButton'> Proyecto </button>
                  <button onClick={ActivateCiclo} className='cardContentButton'> Información del Ciclo </button>
                </div>

                <div className='Resumen'>
                El curso está orientado al diseño de Redes LAN/WAN avanzado y al uso de
                protocolos de Enrutamiento dinámico basados en el algoritmo de Bellman-Ford
                y Dijkstra, que son la base de los protocolos como RIP, OSPF, EIGRP, IS-IS, a
                un nivel avanzado. Se estudió las implementaciones tanto en redes IPv4 como en IPv6
                </div>

                <div className='Proyecto'>
                  El proyecto del curso fue basado el la simulación en GNS3, de las comunicaciones
                  entre distintas redes. Se implemento subredes en RIP, OSPF, EIGRP y se 
                  estableció una conexión sólida entre las subredes utilizando BGP
                </div>

                <div className='infodelciclo'>
                  <ul>
                    <li><b>Ciclo:</b> 2023-II</li>
                    <li><b>Nota Final:</b> 18 </li>
                    <li><b>Ranking del Periodo:</b> Décimo Superior</li>
                  </ul>
                </div>

            </div>
          </div>

          <div className='section'>
            <div className='title'> <h3>EL0083 - Tópicos de Sistemas Computacionales</h3> </div>
            <div className='imgcontainer'>  <img src="Diagrama de bloques.png" alt="" /></div>
            <div className='content'>
                <div className='contentButtons'>
                  <button onClick={ActivateResumen}  className='cardContentButton'> Resumen </button>
                  <button onClick={ActivateProyecto} className='cardContentButton'> Proyecto </button>
                  <button onClick={ActivateCiclo} className='cardContentButton'> Información del Ciclo </button>
                </div>
              
                <div className='Resumen'>
                  Este curso profundisa aún más el uso de sistemas embebidos, es curso está enfocado en sistemas operativos de tiempo real (RTOS)
                  implementado en sistemas embebidos utilizando la tarjeta NUCLEO-L476RG.

                </div>

                <div className='Proyecto'>
                  Para este proyecto se realizó un sistema basado en un cubesat, que monitorea diferentes
                  tareas, desde monitoreo de batería, manejo de potencia a subsistemas para 5v y 3.3v, estas
                  tareas son monitoreadas por el RTOS
                </div>

                <div className='infodelciclo'>
                  <ul>
                    <li><b>Ciclo:</b> 2023-I</li>
                    <li><b>Nota Final:</b> 17 </li>
                    <li><b>Ranking del Periodo:</b> Décimo Superior</li>
                  </ul>
                </div>

            </div>
          </div>

          <div className='section'>
            <div className='title'> <h3>EL0069 - Proyecto ECE</h3> </div>
            <div className='imgcontainer'> <img src="nodo.png" alt="" /> </div>
            <div className='content'>
                <div className='contentButtons'>
                  <button onClick={ActivateResumen}  className='cardContentButton'> Resumen </button>
                  <button onClick={ActivateProyecto} className='cardContentButton'> Proyecto </button>
                  <button onClick={ActivateCiclo} className='cardContentButton'> Información del Ciclo </button>
                </div>

                <div className='Resumen'>
                  Proyecto ECE es un curso que prepara para el desarrollo de la tesis utilizando un proyecto como base. 
                  Este proyecto consistió de diseñar e implementar un nodo sensor de C02 con una plataforma IoT para 
                  usuarios y admins
                </div>

                <div className='Proyecto'>
                  En este proyecto se utilizaron varias herramientas aprendidas a lo largo de la carrera, desde diseño de PCBs,
                  programación en C para sistemas embebidos, manejo de bases de datos con MySQL y desarrollo web con Nodejs, html y css. 
                </div>

                <div className='infodelciclo'>
                  <ul>
                    <li><b>Ciclo:</b> 2022-I</li>
                    <li><b>Nota Final:</b> 16 </li>
                    <li><b>Ranking del Periodo:</b> Décimo Superior</li>
                  </ul>
                </div>

            </div>
          </div>

          <div className='section'>
            <div className='title'> <h3>EL9002 - Introducción a Cognitive Computing</h3> </div>
              <div className='imgcontainer_'> 
                <img src="Amplify.png" alt="" />
                <img src="API-Gateway.png" alt="" />
                <img src="AppSync.png" alt="" />
                <img src="Cognito.png" alt="" />
                <img src="DynamoDB.png" alt="" />
                <img src="IAM.png" alt="" />
                <img src="Lambda.png" alt="" />
                <img src="QuickSight.png" alt="" />
                <img src="S3.png" alt="" />
                <img src="SimpleQ.png" alt="" />
                <img src="SNS.png" alt="" />
                <img src="IoT.png" alt="" />
              </div>
              
            <div className='content'>
                <div className='contentButtons'>
                  <button onClick={ActivateResumen}  className='cardContentButton'> Resumen </button>
                  <button onClick={ActivateProyecto} className='cardContentButton'> Proyecto </button>
                  <button onClick={ActivateCiclo} className='cardContentButton'> Información del Ciclo </button>
                </div>

                <div className='Resumen'>
                  El curso introduce sobre los conceptos fundamentales de Cloud Computing y Cognitive Computing, son una plataforma tecnológica que
                  permite ofrecer servicios de computación a través de internet y abarcan el
                  aprendizaje automático, el razonamiento, el procesamiento del lenguaje
                  natural, el reconocimiento de habla y visión, la interacción entre hombre y
                  computadora entre otras tecnologías.
                </div>

                <div className='Proyecto'>
                  En este proyecto se utilizaron varias herramientas aprendidas a lo largo de la carrera, desde diseño de PCBs,
                  programación en C para sistemas embebidos, manejo de bases de datos con MySQL y desarrollo web con Nodejs, html y css. 
                </div>

                <div className='infodelciclo'>
                  <ul>
                    <li><b>Ciclo:</b> 2022-I</li>
                    <li><b>Nota Final:</b> 18 </li>
                    <li><b>Ranking del Periodo:</b> Décimo Superior</li>
                  </ul>
                </div>

            </div>
          </div>

          <div className='section'>
            
            <div className='title'> <h3>EL0080 - Diseño de Software</h3> </div>
            
            <div className='imgcontainer_'> 
                <img src="CSS3.png" alt="" />
                <img src="git.png" alt="" />
                <img src="Flask.png" alt="" />
                <img src="JavaScript.png" alt="" />
                <img src="python.png" alt="" />
                <img src="react.png" alt="" />
                <img src="social.png" alt="" />
                <img src="Tensorflow.png" alt="" />
                <img src="html.png" alt="" />
                <img src="c-.png" alt="" />
                <img src="c-sharp.png" alt="" />
                <img src="unity.png" alt="" />
              </div>

            <div className='content'>
                <div className='contentButtons'>
                  <button onClick={ActivateResumen}  className='cardContentButton'> Resumen </button>
                  <button onClick={ActivateProyecto} className='cardContentButton'> Proyecto </button>
                  <button onClick={ActivateCiclo} className='cardContentButton'> Información del Ciclo </button>
                </div>

                <div className='Resumen'>
                El curso introduce a los conceptos de Diseño de sistemas de Software usando 
                técnicas de modelamiento. Además, la relación
                entre el diseño y el proceso de software utilizando el lenguaje de Modelamiento
                Unificado-UML. Se introducen las metodologías ágiles y se identifican los
                elementos de la metodología Scrum. También se revisan conceptos
                fundamentales de manejo de patrones de diseño de software y Frameworks.

                </div>

                <div className='Proyecto'>
                  Se realizó un clon de una plataforma de ventas con perfiles de usuarios, admins y vendedores. 
                  Se utilizó Python, MySQL, Flask y servicios de AWS para lanzar el aplicativo
                </div>

                <div className='infodelciclo'>
                  <ul>
                    <li><b>Ciclo:</b> 2021-I</li>
                    <li><b>Nota Final:</b> 16 </li>
                    <li><b>Ranking del Periodo:</b> N/A</li>
                  </ul>
                </div>
              
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Academic
