import React from 'react'
import { Sidebar , Menu , MenuItem , useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import perfilImg from "../../src/assets/img/imgHeader.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { Link } from 'react-router-dom';


function SideBar() {
  const { collapseSidebar } = useProSidebar();
  return (
        <Sidebar className="container-sidebar">
            <Menu>
                <MenuItem
                    icon={<MenuOutlinedIcon />}
                    onClick={() => {
                    collapseSidebar();
                    }}
                    style={{ textAlign: "center" }}
                >
                    {" "}
                </MenuItem>
                    <section>
                        <a href="#header"><div href="#header" className='container-img'>
                            <img href="#header" type="button" className='img-JoaRodDev' src={perfilImg} alt="imagen JoaRodDev"/>
                        </div>
                        </a>
                        <div className='sidebar-menuBody'>
                            <a href='#presentation'>
                                <MenuItem className='sidebar-menuItem' icon={<AccountCircleIcon sx={{ fontSize: 25 }}/>}>Sobre mi</MenuItem>
                            </a>
                            <a href="#proyects">
                                <MenuItem className='sidebar-menuItem' icon={<WorkOutlineRoundedIcon sx={{ fontSize: 25 }} />}>Proyectos</MenuItem>
                            </a>
                            <a href='#skills'>
                                <MenuItem className='sidebar-menuItem' icon={<SchoolOutlinedIcon sx={{ fontSize: 25 }} />}>Skills</MenuItem>
                            </a>
                            <a href="#certificated">
                                <MenuItem className='sidebar-menuItem' icon={<StarOutlineOutlinedIcon sx={{ fontSize: 25 }} />}>Certificados</MenuItem>
                            </a>
                            <a href="#services">
                                <MenuItem className='sidebar-menuItem' icon={<DesignServicesIcon sx={{ fontSize: 25 }} />}>Servicios</MenuItem>
                            </a>
                            <a href="#contact">
                                <MenuItem className='sidebar-menuItem' icon={<AlternateEmailOutlinedIcon sx={{ fontSize: 25 }} />}>Contacto</MenuItem>
                            </a>
                        </div>
                    </section>
            </Menu>
        </Sidebar>
  );
}

export default SideBar