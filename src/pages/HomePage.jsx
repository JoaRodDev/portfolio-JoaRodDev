import React from 'react'
import SideBar from '../components/SideBar';
import { dividerClasses } from '@mui/material';
import svg from "../../src/assets/img/programming-animate.svg"

function HomePagePrubaTwo() {
  return (
    <>
      <div id="app" className="container-HomePage">
        <SideBar/>
          <section className='container-content'>
            <header className='header-homePage'></header>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
              Pagina principal
            </h1>
            <img className='img-svg' src={svg}></img>
          </section>
      </div>
      
    </>
  );
}

export default HomePagePrubaTwo