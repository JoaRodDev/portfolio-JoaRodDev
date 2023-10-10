import React from 'react'
import ListProyects from './components/ListProyects'

function Proyects() {
  return (
    <section id='proyects' class="container_proyects">
      <div>
        <div class="container_title">
          <h2 class="title_proyects" >Proyectos</h2>
          <p className='subTitle_proyects'>Cada proyecto es una expresión de mi pasión por la innovación y el compromiso con la excelencia. Aquí encontrarás una variedad de trabajos que abarcan diferentes áreas de desarrollo y diseño, y que reflejan mi enfoque en la calidad y la eficiencia.</p>
        </div>
        <div>
          < ListProyects />
        </div>
      </div>
    </section>
  )
}

export default Proyects