import React, { useState } from 'react';

export default function CardProyect(props) {
  const { id, category, description, github, technologies, title, image} = props.item
  const [colorState, setColorState] = useState("blue")
  console.log(image)
  function handleClick(evt) {
    setColorState("green");
  }

  let cardImage = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='card_proyect shadowHover' style={ cardImage }>
      <div className='cont_infoCard'>
        <h3>{title}</h3>
        <button className='button-84'>Ver proyecto</button>
      </div>
    </div>
      );
}