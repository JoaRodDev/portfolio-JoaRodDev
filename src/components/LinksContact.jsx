import React from 'react'
import { Link } from 'react-router-dom'

function LinksContact() {
  return (
    <footer className='container-linksContact'>
        <div className='cont-2'>
            <a href=""><h4 className='text-linksContact'>linkedin</h4></a>
            <a href=""><h4 className='text-linksContact'>GitHub</h4></a>
        </div>
        <div className='cont-2'>
            <a href=""><h4 className='text-linksContact'>Email</h4></a>
            <Link path="/blog">
                <h4 className='text-linksContact'>Blog</h4>
            </Link>
        </div>
    </footer>
  )
}

export default LinksContact