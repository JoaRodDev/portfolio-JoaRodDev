import React from 'react'
import "./CardService.css"
import ButtonSlide from '../ButtonSlide';
import { Link } from 'react-router-dom';

function CardService(props) {

	const {price, payment, service, title, description, buttonText, href} = props

	function business(payment){
		if(payment === "month"){
			return "/ m"
		} else {
			return;
		}
	}
	function serviceModel(service){
		switch (service) {
			case "basic":
					return <ul class="features">
						<li>
							<span class="icon">
								<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 0h24v24H0z" fill="none"></path>
									<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
								</svg>
							</span>
							<span className='text_info'><strong>3</strong> secciones.</span>
						</li>
						<li>
							<span class="icon">
								<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 0h24v24H0z" fill="none"></path>
									<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
								</svg>
							</span>
							<span className='text_info'><strong>1 </strong>AÑO DE<strong> Garantía.</strong></span>
						</li>
						<li>
							<span class="icon">
								<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 0h24v24H0z" fill="none"></path>
									<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
								</svg>
							</span>
							<span className='text_info'><strong>100%</strong> Personalizado.</span>
						</li>
					</ul>
				break;
			case "normal":
					return <ul class="features">
						<li>
							<span class="icon">
								<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 0h24v24H0z" fill="none"></path>
									<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
								</svg>
							</span>
							<span className='text_info'>Beneficios plan <strong>Digital.</strong></span>
						</li>
						<li>
							<span class="icon">
								<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 0h24v24H0z" fill="none"></path>
									<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
								</svg>
							</span>
							<span className='text_info'><strong>3</strong> actualizaciones <strong>/m.</strong></span>
						</li>
						<li>
							<span class="icon">
								<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 0h24v24H0z" fill="none"></path>
									<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
								</svg>
							</span>
							<span className='text_info'>Hasta <strong>20</strong> productos.</span>
						</li>
						<li>
							<span class="icon">
								<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 0h24v24H0z" fill="none"></path>
									<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
								</svg>
							</span>
							<span className='text_info'><strong>Integración</strong> con redes sociales.</span>
						</li>
					</ul>
				break;
			case "premium":
					return <ul class="features">
						<li>
							<span class="icon">
								<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 0h24v24H0z" fill="none"></path>
									<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
								</svg>
							</span>
							<span className='text_info'>Beneficios <strong>Pro-Digital.</strong></span>
						</li>
						<li>
							<span class="icon">
								<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 0h24v24H0z" fill="none"></path>
									<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
								</svg>
							</span>
							<span className='text_info'><strong>5</strong> secciones.</span>
						</li>
						<li>
							<span class="icon">
								<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 0h24v24H0z" fill="none"></path>
									<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
								</svg>
							</span>
							<span className='text_info'>Mantenimiento mensual.</span>
						</li>
						<li>
							<span class="icon">
								<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 0h24v24H0z" fill="none"></path>
									<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
								</svg>
							</span>
							<span className='text_info'>Contenido <strong>autogestionable.</strong></span>
						</li>
						<li>
							<span class="icon">
								<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 0h24v24H0z" fill="none"></path>
									<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
								</svg>
							</span>
							<span className='text_info'>Productos <strong>Ilimitados.</strong></span>
						</li>
					</ul>
				break;
			default:
				break;
		}
	}

	return (
		<div class="plan">
			<div class="inner">
				<span class="pricing">
					<span>
						${price} USD<small>{business(payment)}</small>
					</span>
				</span>
				<p class="title">{title}</p>
				<p class="info">{description}</p>
				{serviceModel(service)}
				<div class="action">
					<Link to={href}>
						<ButtonSlide text={buttonText}/>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CardService