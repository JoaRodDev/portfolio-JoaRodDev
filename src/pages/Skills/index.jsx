import React from 'react'
import TechnologyCard from '../../components/TechnologyCard'

function Skills() {
  return (
    <section id='skills' className='conteiner_skills'>
        <div className='cont_titleSkills'>
            <h2 className='titleSkills'>Skills</h2>
            <p className='descriptionSkills'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor nulla officia eius quia, quod dignissimos totam! Quos iure, repellendus hic aut eaque dicta necessitatibus dolorem nulla dolorum explicabo, officia maxime.</p>
        </div>
        <div className='cont_cardsSkills'>
           <TechnologyCard technology="JavaScript" nivel="Senior" category="lenguaje" />
           <TechnologyCard technology="HTML" nivel="Senior" category="lenguaje de marcado" />
           <TechnologyCard technology="CSS" nivel="Senior" category="lenguaje de estilos" />
           <TechnologyCard technology="SCSS" nivel="Senior" category="Pre-procesador" />
           <TechnologyCard technology="React JS" nivel="Senior" category="librería de JavaScript" />
           <TechnologyCard technology="Node JS" nivel="Junior" category="Entorno de desarrollo" />
        </div>
    </section>
  )
}

export default Skills