import React from 'react'
import SideBar from '../components/SideBar';
import Presentation from './Presentation';
import Header from '../components/Header';
import Experiecia from './Experiencia';

function HomePagePrubaTwo() {
  return (
    <>
      <div id="app" className="container-HomePage">
        {/* <div className='cont-sideHome'>
        </div> */}
          <SideBar></SideBar>
        <section className='container-content'>
          <Header></Header>
          <Presentation />
          <Experiecia/>
        </section>
      </div>
      
    </>
  );
}

export default HomePagePrubaTwo