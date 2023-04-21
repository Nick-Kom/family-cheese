import * as React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FirebaseService from "../../services/FirestoreService"

export default function SignIn() {
	const navigate = useNavigate()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = async event => {
		event.preventDefault()
		console.log({ email, password })
		const userCredential = await FirebaseService.signIn(email, password)
		const user = userCredential.user
		navigate("/admin")
		console.log(user)
	}

	return (
		<div className="container">
			<div className="row justify-content-center align-content-center" style={{ height: "100vh" }}>
				<div className="col col-10 col-md-8 col-lg-4">
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
				</div>
			</div>
		</div>
	)
}
