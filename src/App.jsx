import './App.css'
import InfoContacto from './components/InfoContacto'
import Servicios from './components/Servicios'
import Testimonios from './components/Testimonios'

function App() {

  return (
    <>
    
      {/* 
      <Servicios />
      <Testimonios /> */}

<header>
		<a href="#" className="logo">Veterinaria</a>
		<div className="menuToggle"></div>
		<ul className="nav">
			<li className="active"><a href="#home">Inicio</a></li>
			<li><a href="#portfolio">Contacto</a></li>
			<li><a href="#services">Services</a></li>
			<li><a href="#contact">Testimonios</a></li>
		</ul>
	</header>
	<section id="home">
		<div className="content">
			<h2>John Smith</h2>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quos omnis illum dolor distinctio aperiam consectetur eaque, in sed exercitationem accusamus blanditiis adipisci, dolores obcaecati quae ducimus cum. Harum, odio.</p>
			<a href="#" className="btn">Contact Me</a>
		</div>
		<img src="src/assets/imagenes/men.png" className="men" />
	</section>
	<InfoContacto />
	<Servicios />
	<Testimonios />

    </>
  )
}

export default App
