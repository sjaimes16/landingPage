import React from 'react'
import './InfoContacto.css'

const InfoContacto = ({ contacto }) => (
  <div className="contenedor" id='contacto'>
    {contacto.map((img, index) => (
      <div className="box" key={index}>
        <b></b>
        <img src={img.imagenes} />
        <div className="content2">
          <h2 className='h2Prueba'>{img.profesion}<br /><span>Creative Designer</span></h2>
          <ul className="sci">
            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    ))}
  </div>
);

export default InfoContacto