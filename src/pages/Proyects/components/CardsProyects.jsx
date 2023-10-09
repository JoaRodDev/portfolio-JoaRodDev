import React, { useState } from 'react';
import ButtonSlide from '../../../components/ButtonSlide';
import "./cardProyect.css"
import { Link } from 'react-router-dom';

export default function CardProyect(props) {
  const { id, category, description, github, technologies, title, image, deploy} = props.item

  return (
    <div class="cont_cardProyect">
      <img src={image} alt="" />
      <div class="card__content">
        <p class="titleProyectCard">{title}</p>
        <p class="descriptionProyectCard">{description}</p>
        <div className='cont_cardButtons'>
          <Link to={`/proyect/${id}`}>
            <ButtonSlide text="Detalles" />
          </Link>
          {/* <BtnLinksProyect linkOne={github} linkTwo={deploy}/>  */}
        </div>
      </div>
    </div>

      );
}