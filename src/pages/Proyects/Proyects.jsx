import React from 'react'
import ListProyects from './components/ListProyects'

function Proyects() {
  return (
    <section id='proyects' class="container_proyects">
      <div>
        <div class="container-title">
          <h2 class="" >Proyectos</h2>
          <p>Proyectos profecionales y de formación</p>
        </div>
        <div>
          < ListProyects />
        </div>
      </div>
    </section>
  )
}

export default Proyects