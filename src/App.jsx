import './App.css'
import InfoContacto from './components/InfoContacto'
import Servicios from './components/Servicios'
import Testimonios from './components/Testimonios'

function App() {
	const contacto = [
		{
		  imagenes: 'src/assets/img1.jpg',
		  profesion: 'Doctor',
		},
		{
		  imagenes: 'src/assets/img2.jpg',
		  profesion: 'Cirujano',
		},
		{
		  imagenes: 'src/assets/img3.jpg',
		  profesion: 'Enfermera',
		},
	];

	const servicios = [
		{
		  imagenes: 'src/assets/imagenes/icon1.png',
		  description: 'Adecuada capacidad de servicios de laboratorio.',
		},
		{
		  imagenes: 'src/assets/imagenes/icon2.png',
		  description: 'Control de enfermedades epidémicas.',
		},
		{
		  imagenes: 'src/assets/imagenes/icon3.png',
		  description: 'Control de la importación y certificación de animales para la exportación.',
		},
		{
		  imagenes: 'src/assets/imagenes/icon4.png',
		  description: 'Certificación de la calidad y el etiquetado veraz de medicamentos y vacunas',
		}
	];

	const testimonios = [
		{
		  description: 'Maravillosa experiencia, tanto Judith como todo el equipo de Gous Gorraiz ha sido exquisito. Puedo realizar esta reseña desde la experiencia de otras clínicas en Pamplona de renombre',
		},
		{
		  description: 'ESTAMOS encantados con el trato y la atención recibida hacia nosotros y especialmente a LATZ por parte de estas estupendas veterinarias profesionales.',
		},
		{
		  description: 'Agradecer y reconocer todo el trabajo y cuidado de Toto durante todos éstos años, pero sobretodo su manera de proceder, la cercanía y el cariño que nos dieron en los peores momentos.',
		},
		{
		  description: 'Tanto para mí como para mis perretes el trato ya no puede ser mejor. CLÍNICA: 10 y destacar el trato personal hacia el cliente y paciente, tanto a la persona como perruno',
		}
	];
  return (
	
    <>
	<header>
		<a href="#" className="logo">Veterinaria</a>
		<div className="menuToggle"></div>
		<ul className="nav">
			<li className="active"><a href="#home">Inicio</a></li>
			<li><a href="#contacto">Contacto</a></li>
			<li><a href="#services">Services</a></li>
			<li><a href="#contact">Testimonios</a></li>
		</ul>
	</header>
	<section id="home">
		<div className="content">
			<h2>Bienvenidos</h2>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quos omnis illum dolor distinctio aperiam consectetur eaque, in sed exercitationem accusamus blanditiis adipisci, dolores obcaecati quae ducimus cum. Harum, odio.</p>
			<a href="#" className="btn">Contact Me</a>
		</div>
		<img src="src/assets/imagenes/veterinario.png" className="men" />
	</section>
	<InfoContacto contacto={contacto}/>
	<Servicios servicios={servicios}/>
	<Testimonios testimonios={testimonios}/>

    </>
  )
}

export default App
