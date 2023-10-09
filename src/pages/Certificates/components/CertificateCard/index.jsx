import React from 'react'
import "./CertificatesCard.css"

function CerificateCard(props) {

    const {id, name, image, idc, institution, url} = props.item

    
  return (
    <div class="cardCertificate">
        <div class="content_cardTech">
            <div class="back">
            <div class="back-content">
                <strong className='title_cardCertificated'>{name}</strong>
            </div>
            </div>
            <div class="front">
            <div class="img">
                <div class="circle">
                </div>
                <div class="circle" id="right">
                </div>
                <div class="circle" id="bottom">
                </div>
            </div>

            <div class="front-content">
                <small class="badge">
                    <a href={url}>Vizualizar</a>
                </small>
                <div class="description">
                <div class="title">
                    <p class="title">
                    <strong>{institution}</strong>
                    </p>
                 </div>
                <p class="card-footer">
                    {idc}
                </p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CerificateCard