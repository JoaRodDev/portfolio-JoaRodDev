import React from 'react'
import imgHeader from "../assets/img/perfil.png"
import LinksContact from './LinksContact'

function Header() {
  return (
    <>
      <header id="header" className='header-homePage'>
          <section className='container-infoHeader'>
              <h1 className='info-header'>¡Hola! 👋<br/>
                  Soy <strong className='strong-infoHeader'>Joaquin</strong>, un curioso y apasionado por
                  la <strong className='strong-infoHeader'>tecnología</strong>, y la <strong className='strong-infoHeader'>programación.</strong></h1>
            <div className='cont-imgCV'>
              <div className='container-imgHeader floating'>
                <a href="https://www.linkedin.com/in/joaquinrodriguez-dev"><img className='img-header' src={imgHeader} alt="" /></a>
              </div>
              <button className='button-86 buttonHeader'>Descargar CV</button>
            </div>
          </section>
          <LinksContact/>
      </header>
    </>
  )
}

export default Header