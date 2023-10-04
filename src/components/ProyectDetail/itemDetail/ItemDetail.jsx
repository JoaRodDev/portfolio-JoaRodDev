import React from 'react'
import SidebarProyect from '../../SidebarProyect/index'
import LinksContact from '../../LinksContact'
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

function ItemDetail(proyectDetail) {

  function technologiesStack(proyect){
    if(proyect.technologies){
      return (
        proyect.technologies.map((technology) => {
          return <h5>{technology} |</h5>
        })
      )
    } else {
      return ;
    }
  }


  return (
    <section className='container_proyect' style={{
      backgroundImage: `url(${proyectDetail.image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <SidebarProyect proyect={proyectDetail} />
      <div className='filter_background'>
        <div className='container_infoProyect'>
          <h1 className='title_proyectDetail'>{proyectDetail.title}</h1>
          <LinksContact/>
          <div className='cont_proyectDescription'>
            <div className='cont_imgProyec'>
              <img className='shadowHover' src={proyectDetail.image} alt="" />
            </div>
            <div className='proyect_information'>
              <h4 className='description_proyect'>{proyectDetail.description}</h4>
              <div className='cont_technologyStack'>
                <p>Tecnologías utilizadas:</p>
                <div>
                  {technologiesStack(proyectDetail)}
                </div>
              </div>
              <div className='cont_linksView'>
                {proyectDetail.github ? (
                  <Link className='iconGithub' to={proyectDetail.github}>
                  <GitHubIcon sx={{ fontSize: 45 }} />
                </Link>
                ) : ("")}
                {proyectDetail.deploy ? (
                  <Link className="iconRocket" to={proyectDetail.deploy}>
                    <RocketLaunchIcon sx={{ fontSize: 45 }} />
                  </Link>):("")}
                {proyectDetail.demo ? (
                  <Link className='iconYoutube' to={proyectDetail.demo}>
                    <YouTubeIcon sx={{ fontSize: 45 }} />
                  </Link>) : ("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemDetail