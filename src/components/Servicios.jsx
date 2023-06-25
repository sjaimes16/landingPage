import React from 'react'
import './Servicios.css'

const Servicios = () => {
  return (
    <>
    <section id="services">
		<div className="secText">
			<h2>What I Am Great At</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet esse ullam nobis, suscipit harum laudantium voluptate laborum aspernatur perferendis at officia reprehenderit facere cum!</p>
		</div>
		<div className="content">
			<div className="servicesBx">
				<img src="src/assets/imagenes/icon1.png" alt=""/>
				<h3>Web Designing</h3>
			</div>
			<div className="servicesBx">
				<img src="src/assets/imagenes/icon2.png" alt="" />
				<h3>Web Development</h3>
			</div>
			<div className="servicesBx">
				<img src="src/assets/imagenes/icon3.png" alt="" />
				<h3>Android Apps</h3>
			</div>
			<div className="servicesBx">
				<img src="src/assets/imagenes/icon4.png" alt="" />
				<h3>Video Editing</h3>
			</div>
		</div>
		<div className="center">
			<a href="#" className="btn">Hire Me</a>
		</div>
	</section>
    </>
  )
}

export default Servicios