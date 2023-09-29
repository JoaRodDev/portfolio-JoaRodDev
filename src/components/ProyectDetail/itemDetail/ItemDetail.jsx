import React from 'react'
import SidebarProyect from '../../SidebarProyect/index'
import LinksContact from '../../LinksContact'

function ItemDetail(proyectDetail) {
  return (
    <section className='container_proyect'>
      <SidebarProyect />
      <div className='container_infoProyect'>
        <h1 className='title_proyectDetail'>{proyectDetail.title}</h1>
        <LinksContact/>
        <div className='cont_proyectDescription'>
          <div className='cont_imgProyec'>
            <img src={proyectDetail.image} alt="" />
          </div>
          <p>{proyectDetail.description}</p>
        </div>
      </div>
    </section>
  )
}

export default ItemDetail