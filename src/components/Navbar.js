import React from "react"
import Logo from "../assets/Logo.svg"

export default function Navbar() {
	return (
		<nav>
			<div className="nav-logo-container">
				<img src={Logo} alt="" />
			</div>
			<div className="navbar-links-container">
				<a href={() => false}>Contact</a>
				<button className="primary-button">Bookings Now</button>
			</div>
		</nav>
	)
}
