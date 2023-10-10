import React from 'react'
import CardService from '../../components/CardService'

function Services() {
  return (
    <section id='services' className='container_services'>
        <div className='cont_infoServices'>
            <h2>Servicios</h2>
            <p>Te proporciono una visión de cómo puedo ayudarte a alcanzar tus objetivos y necesidades en el mundo digital. Mi enfoque se centra en ofrecer soluciones tecnológicas de alta calidad y creativas.</p>
        </div>
        <div className='cont_cardsServices'>
          <CardService 
            price="85"
            payment=""
            service="basic"
            title="Plan Digital"
            description="Ideal para visualizar información importante de tu negocio."
            buttonText="¡Contactar!"
            href={import.meta.env.VITE_REACT_APP_LINK_LINKEDIN}
          />
          <CardService 
            price="145"
            payment="month"
            service="normal"
            title="Plan Pro-Digital"
            description="Ideal para exponer tus productos o servicios de manera profesional."
            buttonText="¡Adquirir!"
            href={import.meta.env.VITE_REACT_APP_LINK_LINKEDIN}
          />
          <CardService 
            price="195"
            payment="month"
            service="premium"
            title="Plan Premium-Digital"
            description="Ideal si tu negocio tiene un gran volumen de ventas y productos."
            buttonText="¡Lo quiero!"
            href={import.meta.env.VITE_REACT_APP_LINK_LINKEDIN}
          />
        </div>
    </section>
  )
}

export default Services