import React from "react"
import Logo from "../assets/Logo.svg"

export default function Footer() {
	return (
		<div className="footer-wrapper">
			<div className="footer-section-one">
				<div className="footer-logo-container">
					<img src={Logo} alt="" />
				</div>
				{/*<div className="footer-icons">Twitter Linkedin Youtube Facebook</div>*/}
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
