import React from 'react'
import ListProyects from './components/ListProyects'

function Proyects() {
  return (
    <section id='proyects' class="container_proyects">
      <div>
        <div class="container_title">
          <h2 class="title_proyects" >Proyectos</h2>
          <p className='subTitle_proyects'>Proyectos profecionales y de formación</p>
        </div>
        <div>
          < ListProyects />
        </div>
      </div>
    </section>
  )
}

export default Proyects