import React from 'react'
import SideBar from '../components/SideBar';
import Presentation from './Presentation';
import Header from '../components/Header';
import Proyects from './Proyects/Proyects';
import Skills from './Skills';

function HomePagePrubaTwo() {
  return (
    <>
      <div id="app" className="container-HomePage">
          <SideBar></SideBar>
        <section className='container-content'>
          <Header></Header>
          <Presentation />
          <Proyects/>
          <Skills/>
        </section>
      </div>
      
    </>
  );
}

export default HomePagePrubaTwo