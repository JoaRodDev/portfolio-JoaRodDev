import React from 'react'
import SideBar from '../components/SideBar';
import Presentation from './Presentation';
import Header from '../components/Header';

function HomePagePrubaTwo() {
  return (
    <>
      <div id="app" className="container-HomePage">
        <SideBar></SideBar>
        <section className='container-content'>
            <Header/>
            <Presentation />
          </section>
      </div>
      
    </>
  );
}

export default HomePagePrubaTwo