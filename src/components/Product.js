import React from "react"

export default function Product() {
	return (
		<div className="product-section-container">
			<div className="product-section-image-container">
				<img src="https://freepngimg.com/thumb/cheese/10-cheese-png-image-thumb.png" alt="" />
			</div>
			<div className="product-section-text-container">
				<h1 className="primary-heading">Food Is An Important Part Of A Balanced Diet</h1>
				<p className="primary-text">
					Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui
					magnis facilisis at fringilla quam.
				</p>
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
