import React from 'react'
import { Sidebar , Menu , MenuItem , useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import perfilImg from "../../assets/img/imgHeader.png"
import HomeIcon from '@mui/icons-material/Home';
import RocketIcon from '@mui/icons-material/Rocket';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


function SidebarProyect(props) {
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
                        <Link to={"/"}>
                            <div href="#header" className='container-img'>
                                <img href="#header" type="button" className='img-JoaRodDev' src={perfilImg} alt="imagen JoaRodDev"/>
                            </div>
                        </Link>
                        <div className='sidebar-menuBody'>
                            <Link to={"/"}>
                                <MenuItem className='sidebar-menuItem' icon={<HomeIcon sx={{ fontSize: 25 }} />}>Inicio</MenuItem>
                            </Link>
                            <Link to={props.proyect.deploy}>
                                <MenuItem className='sidebar-menuItem' icon={<RocketIcon sx={{ fontSize: 25 }} />}>Deploy</MenuItem>
                            </Link>
                            <Link to={props.proyect.github}>
                                <MenuItem className='sidebar-menuItem' icon={<GitHubIcon sx={{ fontSize: 25 }} />}>GitHub</MenuItem>
                            </Link>
                            <Link to={import.meta.env.VITE_REACT_APP_LINK_LINKEDIN}>
                                <MenuItem className='sidebar-menuItem' icon={<LinkedInIcon sx={{ fontSize: 25 }} />}>Linkedin</MenuItem>
                            </Link>
                        </div>
                    </section>
            </Menu>
        </Sidebar>
  );
}

export default SidebarProyect