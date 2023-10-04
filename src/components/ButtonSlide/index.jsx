import React from 'react'
import "./buttonSlide.css"

function ButtonSlide(props) {
  return (
    <button class="ui-btn shadowHover">
      <span>
        {props.text}
      </span>
    </button>
  )
}

export default ButtonSlide