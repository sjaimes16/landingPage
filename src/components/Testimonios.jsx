import React from 'react'
// import './Testimonios.css'

const Testimonios = ({testimonios}) => {
  return (
    <>
	<section id="contact">
		<div className="secText">
		  <h2>Testimonios</h2>
		</div>
		{testimonios.map((testimonio, index) => (
		  <div className="content" key={index}>
			<a href="#">
				<ion-icon name="mail-outline"></ion-icon> 
				{testimonio.description}
			</a>
		  </div>
		))}
		<div className="contentButton">
			<a href="https://api.whatsapp.com/send?phone=3227536718&text=Hola" target="_blank">
				<ion-icon name="logo-whatsapp"></ion-icon> whatsapp
			</a>
		</div>
	  </section>
    </>
  )
}

export default Testimonios