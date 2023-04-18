import "./App.css"

import Home from "./components/Home"
import Admin from "./components/admin/Admin"
import SignIn from "./components/admin/SignIn"

import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"

import { auth } from "./middleware/firebase"
import { onAuthStateChanged } from "firebase/auth"

function App() {
	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid
				// ...
				console.log("uid", uid)
			} else {
				// User is signed out
				// ...
				console.log("user is logged out")
			}
		})
	}, [])

	return (
		<Router>
			<div>
				<section>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/admin" element={<Admin />} />
						<Route path="/signin" element={<SignIn />} />
					</Routes>
				</section>
			</div>
		</Router>
	)
}

export default App
