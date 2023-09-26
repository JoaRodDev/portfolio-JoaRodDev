import React, { useState } from 'react';
import ButtonSlide from '../../../components/ButtonSlide';
import "./cardProyect.css"
import { Link } from 'react-router-dom';

export default function CardProyect(props) {
  const { id, category, description, github, technologies, title, image} = props.item
  const [colorState, setColorState] = useState("blue")
  function handleClick(evt) {
    setColorState("green");
  }

  let cardImage = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div class="card">
      <img src={image} alt="" />
      <div class="card__content">
        <p class="card__title">{title}</p>
        <p class="card__description">{description}</p>
        <Link to={`/proyect/${id}`}>
          <ButtonSlide text="Ver Proyecto" />
        </Link>
      </div>
    </div>

      );
}