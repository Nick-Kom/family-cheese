import React from "react"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
	const navigate = useNavigate()

	const onSignInNavigate = event => {
		event.preventDefault()
		navigate("/signin")
	}

	return (
		<nav>
			<div className="h1 fw-bold text-uppercase" style={{ letterSpacing: "4px" }}>
				<span style={{ color: "#4c4c4c" }}>Family</span> <span style={{ color: "orange" }}>Cheese</span>
			</div>
			<div className="navbar-links-container">
				<button className="primary-button" onClick={onSignInNavigate}>
					Sign In to Admin
				</button>
			</div>
		</nav>
	)
}
