import React from "react"
import Logo from "../assets/Logo.svg"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
	const navigate = useNavigate()

	const onSignInNavigate = event => {
		event.preventDefault()
		navigate("/signin")
	}

	return (
		<nav>
			<div className="nav-logo-container">
				<img src={Logo} alt="" />
			</div>
			<div className="navbar-links-container">
				<button className="primary-button" onClick={onSignInNavigate}>
					Sign In to Admin
				</button>
			</div>
		</nav>
	)
}
