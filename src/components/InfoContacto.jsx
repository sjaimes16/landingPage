import React from 'react'
// import './InfoContacto.css'

const InfoContacto = () => {
  return (
    <>
    <section id="portfolio">
		<div className="secText">
			<h2>My Masterpiece Collection</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet esse ullam nobis, suscipit harum laudantium voluptate laborum aspernatur perferendis at officia reprehenderit facere cum!</p>
		</div>
		<div className="content">
			<div className="imgBx">
				<img src="src/assets/imagenes/img1.jpg" alt="" />
			</div>
			<div className="imgBx">
				<img src="src/assets/imagenes/img2.jpg" alt="" />
			</div>
			<div className="imgBx">
				<img src="src/assets/imagenes/img3.jpg" alt=""/>
			</div>
			<div className="imgBx">
				<img src="src/assets/imagenes/img4.jpg" alt=""/>
			</div>
			<div className="imgBx">
				<img src="src/assets/imagenes/img5.jpg" alt="" />
			</div>
			<div className="imgBx">
				<img src="src/assets/imagenes/img6.jpg" alt="" />
			</div>
		</div>
		<div className="center">
			<a href="#" className="btn">View More</a>
		</div>
	</section>
    </>
  )
}

export default InfoContacto