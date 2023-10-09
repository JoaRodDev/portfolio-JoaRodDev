import React from 'react'
import ListTechnologies from './components/listTechnologies'

function Skills() {
  return (
    <section id='skills' className='conteiner_skills'>
        <div className='cont_titleSkills'>
            <h2 className='titleSkills'>Skills</h2>
            <p className='descriptionSkills'>Información y señority de las skills obtenidas a lo largo de mi carrera profesional.</p>
        </div>
          <ListTechnologies/>
    </section>
  )
}

export default Skills