import React from 'react'
import { dividerClasses } from '@mui/material';
import svg from "../../src/assets/img/programming-animate.svg"

function Presentation() {
  return (
    <div id="presentation" className='container-presentation'>
        <div className='container-svgPresentation'>
            <img className='img-svg' src={svg}></img>
        </div>
        <div className='container-information'>
            <div className='title-name'>
                <h1 className='name-info'>
                    Joaquín Rodríguez
                </h1>
                <h4 id="specialization-info" className='specialization-info'> Desarrollador Frontend | Estudiante Backend</h4>
            </div>
            <div>
                <p className='text-info'>Me considero una persona
                    emprendedora y autodidacta, gracias a mi perfil obtuve aptitudes como adaptarme con facilidad a
                    proyectos y negocios, rápido aprendizaje, buena organización y trabajo en equipo.
                    Tengo sólidos conocimientos en populares herramientas de desarrollo ya que mi carrera fue
                    influenciada por prestigiosos programas como Coderhouse, Domestika y Argentina Programa, Estoy
                    en búsqueda de una nueva oportunidad laboral con la que pueda seguir impulsando mi carrera
                    académica y profesional.</p>
            </div>
        </div>
    </div>
  )
}

export default Presentation