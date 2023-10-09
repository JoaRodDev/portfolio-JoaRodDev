import React from 'react'
import "./tecnologyIcon.css"

function TecnologyIcon(props) {

    const {id, url, name} = props.item

  return (
    <div className='cont_techLogo'>
        <div id={id} className='cont_img'>
            <img src={url} alt={name}/>
        </div>
        <h4 className='nameTechnology'>{name}</h4>
    </div>
  )
}

export default TecnologyIcon