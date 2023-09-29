import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

function LinksContact() {
  return (
    <footer className='container-linksContact'>
        <div className='cont-2'>
          <a className="iconsContact" href=""><GitHubIcon sx={{ fontSize: 40 }}/></a>
          <a className="iconsContact" href=""><LinkedInIcon sx={{ fontSize: 40 }}/></a>
          <a className="iconsContact" href=""><EmailIcon sx={{ fontSize: 40 }}/></a>
          <a className="iconsContact" href=""><InsertCommentIcon sx={{ fontSize: 40 }}/></a>
        </div>
        <div className='cont-2'>
        </div>
    </footer>
  )
}

export default LinksContact