import React from 'react'
import SideBar from '../components/SideBar';
import Presentation from './Presentation';
import Header2 from '../components/Header2';
import Work from './Work';

function HomePagePrubaTwo() {
  return (
    <>
      <div id="app" className="container-HomePage">
        {/* <div className='cont-sideHome'>
        </div> */}
        <section className='container-content'>
            <Header2/> 
            <Presentation />
            <Work/>
          </section>
      </div>
      
    </>
  );
}

export default HomePagePrubaTwo