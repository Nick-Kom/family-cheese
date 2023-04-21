import "./App.css"

import Home from "./components/Home"
import Admin from "./components/admin/Admin"
import SignIn from "./components/admin/SignIn"

import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"

import { auth } from "./middleware/firebase"
import { onAuthStateChanged } from "firebase/auth"

import FirestoreService from "./services/FirestoreService"
import { LoadingProductsContext, ProductsContext } from "./context/MainContext"

export default function App() {
	const [authenticated, setAuthenticated] = useState(false)
	const [products, setProducts] = useState([])
	const [loadingProducts, setLoadingProducts] = useState(false)

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
		let unsubscribeProducts
		setLoadingProducts(true)
		FirestoreService.getAllProductsSnapshotCallback(querySnapshot => {
			const updatedProducts = querySnapshot.docs.map(docSnapshot => ({
				...docSnapshot.data(),
				id: docSnapshot.id
			}))
			console.log("updatedProducts", updatedProducts)
			setProducts(updatedProducts)
			setLoadingProducts(false)
		}).then(unsubscribe => {
			unsubscribeProducts = unsubscribe
		})

		return unsubscribeProducts
	}, [])

	return (
		<Router>
			<div>
				<section>
					<ProductsContext.Provider value={products}>
						<LoadingProductsContext.Provider value={loadingProducts}>
							<Routes>
								<Route path="/" element={<Home />} />
								{authenticated && <Route path="/admin" element={<Admin />} />}
								<Route path="/signin" element={<SignIn />} />
							</Routes>
						</LoadingProductsContext.Provider>
					</ProductsContext.Provider>
				</section>
			</div>
		</Router>
	)
}
