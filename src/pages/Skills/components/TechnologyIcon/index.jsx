import React from 'react'
import "./tecnologyIcon.css"
import { CircularProgress,  } from '@mui/material'


function TecnologyIcon(props) {

  const {id, url, name} = props.item

  return (
    <div className='cont_techLogo'>
      <div id={id} className='cont_img'>
        <img src={url} alt={name}/>
      </div>
      <div className='cont_infoTech'>
        <h4 className='nameTechnology'>{name}</h4>
        <CircularProgress variant="determinate" value={95} />
      </div>
    </div>
  )
}

export default TecnologyIcon