import * as React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../middleware/firebase"

export default function SignIn() {
	const navigate = useNavigate()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = event => {
		event.preventDefault()

		console.log({
			email,
			password
		})

		signInWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				// Signed in
				const user = userCredential.user
				navigate("/admin")
				console.log(user)
			})
			.catch(error => {
				const errorCode = error.code
				const errorMessage = error.message
				console.log(errorCode, errorMessage)
			})
	}

	return (
		<main className="form-signin-wrapper">
			<form onSubmit={handleSubmit}>
				<h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

				<div className="form-floating">
					<input
						type="email"
						className="form-control"
						id="floatingInput"
						placeholder="name@example.com"
						value={email}
						onChange={e => {
							setEmail(e.target.value)
						}}
						data-temp-mail-org="0"
					/>
					<label htmlFor="floatingInput">Email address</label>
				</div>
				<div className="form-floating mt-3">
					<input
						type="password"
						className="form-control"
						id="floatingPassword"
						placeholder="Password"
						value={password}
						onChange={e => {
							setPassword(e.target.value)
						}}
					/>
					<label htmlFor="floatingPassword">Password</label>
				</div>
				<button className="w-100 mt-3 btn btn-lg btn-primary" type="submit">
					Sign in
				</button>
			</form>
		</main>
	)
}
