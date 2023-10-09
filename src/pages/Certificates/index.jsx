import React from 'react'
import ListCertificates from './components/ListCertificates/ListCertificates'

function Certificates() {
  return (
    <section id="certificates" className='container_certificates'>
        <div>
            <h2 className='titleCertificates'>Certificados</h2>
            <p className='descriptionCertificates'>Certificados que logré adquirir a lo largo de mi carrera de formación gracias a mi desempeño y aptitudes.</p>
        </div>
        <ListCertificates/>
    </section>
  )
}

export default Certificates