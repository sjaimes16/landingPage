import React from 'react'
import './Testimonios.css'

const Testimonios = () => {
  return (
    <>
        <section id="contact">
		<div className="secText">
			<h2>Ways To Contact Me</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet esse ullam nobis, suscipit harum laudantium voluptate laborum aspernatur perferendis at officia reprehenderit facere cum!</p>
		</div>
		<div className="content">
			<a href="#">
				<ion-icon name="mail-outline"></ion-icon> dummy@email.name
			</a>
			<a href="#">
				<ion-icon name="call-outline"></ion-icon> +123 000 000 0000
			</a>
		
			<a href="#">
				<ion-icon name="logo-skype"></ion-icon> skype
			</a>
		
			<a href="#">
				<ion-icon name="logo-whatsapp"></ion-icon> whatsapp
			</a>
		</div>
		<div className="center">
			<p className="copyrights">Copyright © 2021 <a href="#">Online Tutorials</a>. All Right Reserved.</p>
		</div>
	</section>
    </>
  )
}

export default Testimonios