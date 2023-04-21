import React from "react"

export default function Footer() {
	return (
		<div className="footer-wrapper">
			<div className="footer-section-one">
				<div className="h1 fw-bold text-uppercase" style={{ letterSpacing: "4px" }}>
					<span style={{ color: "#4c4c4c" }}>Family</span> <span style={{ color: "orange" }}>Cheese</span>
				</div>
			</div>
			<div className="footer-section-two">
				<div className="footer-section-columns">
					<span>Contact</span>
					<span>Help</span>
				</div>

				<div className="footer-section-columns">
					<span>Terms & Conditions</span>
					<span>Privacy Policy</span>
				</div>
			</div>
		</div>
	)
}
