import React from 'react'
import './Servicios.css'

const Servicios = ({ servicios }) => {
	return (
	  <section id="services">
		<div className="secText">
		  <h2>Servicios</h2>
		</div>
		{servicios.map((servicio, index) => (
		  <div className="contentServices" key={index}>
			<div className="servicesBx">
			  <img src={servicio.imagenes} alt="" />
			  <h3>{servicio.description}</h3>
			</div>
		  </div>
		))}
		<div className="center">
		  <a href="#" className="btn">Hire Me</a>
		</div>
	  </section>
	);
  };

export default Servicios