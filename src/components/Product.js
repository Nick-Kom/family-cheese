import React from "react"

export default function Product({ product }) {
	return (
		<div className="product-section-container">
			<div className="product-section-image-container">
				<img src={product.img} alt="" />
			</div>
			<div className="product-section-text-container">
				<h1 className="primary-heading">{product.title}</h1>
				<p className="primary-text">{product.description}</p>
				<p className="primary-text">
					Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
				</p>
				<div className="product-buttons-container">
					<button className="secondary-button">Learn More</button>
					<button className="watch-video-button">Watch Video</button>
				</div>
			</div>
		</div>
	)
}
