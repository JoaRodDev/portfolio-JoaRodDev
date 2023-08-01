import React from 'react'
import { Sidebar , Menu , MenuItem , useProSidebar } from "react-pro-sidebar" ;
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined" ;
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined" ;
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined" ;
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined" ;
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined" ;
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined" ;
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined" ;
import perfilImg from "../../src/assets/img/perfil.png"

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
                    <section className=''>
                        <div className='container-img'>
                            <img className='img-JoaRodDev' src={perfilImg} alt="imagen JoaRodDev"/>
                        </div>
                        <div className='sidebar-menuBody'>
                            <MenuItem className='sidebar-menuItem' icon={<HomeOutlinedIcon className='sidebar-icon'/>}>Home</MenuItem>
                            <MenuItem className='sidebar-menuItem' icon={<PeopleOutlinedIcon />}>Team</MenuItem>
                            <MenuItem className='sidebar-menuItem' icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
                            <MenuItem className='sidebar-menuItem' icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
                            <MenuItem className='sidebar-menuItem' icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
                            <MenuItem className='sidebar-menuItem' icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
                        </div>
                    </section>
            </Menu>
        </Sidebar>
  );
}

export default SideBar