import "./App.css"

import { app } from "./middleware/firebase"
import { onSnapshot } from "firebase/firestore"

import Home from "./components/Home"
import Admin from "./components/admin/Admin"
import SignIn from "./components/admin/SignIn"

import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"

import { auth } from "./middleware/firebase"
import { onAuthStateChanged } from "firebase/auth"

import { productsCollectionRef } from "./middleware/bindings"

export default function App() {
	const [authenticated, setAuthenticated] = useState(false)
	const [products, setProducts] = useState([])
	//const [snapshots, setSnapshots] = useState([])

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				const uid = user.uid
				setAuthenticated(true)
				console.log("uid", uid)
			} else {
				// User is signed out
				console.log("user is logged out")
				setAuthenticated(false)
			}
		})
	}, [])

	useEffect(() => {
		const unsubscribe = onSnapshot(productsCollectionRef(app), querySnapshot => {
			const updatedProducts = querySnapshot.docs.map(docSnapshot => ({
				...docSnapshot.data(),
				id: docSnapshot.id
			}))
			setProducts(updatedProducts)
			console.log(updatedProducts)
		})

		return () => {
			unsubscribe()
		}
	}, [])

	return (
		<Router>
			<div>
				<section>
					<Routes>
						<Route path="/" element={<Home products={products} />} />
						{authenticated && <Route path="/admin" element={<Admin products={products} />} />}
						<Route path="/signin" element={<SignIn />} />
					</Routes>
				</section>
			</div>
		</Router>
	)
}
