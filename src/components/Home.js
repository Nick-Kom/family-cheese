import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Product from "../components/Product"
import { LoadingProductsContext, ProductsContext } from "../context/MainContext"
import React, { useContext } from "react"

export default function Home() {
	const products = useContext(ProductsContext)
	const loading = useContext(LoadingProductsContext)

	return (
		<div className="home-page">
			<div className="home-page-wrapper">
				<Navbar />
				{products.length ? (
					products.map(product => <Product key={product.id} />)
				) : (
					<div className="h1 text-center" style={{ height: "100vh" }}>
						{loading ? "Loading..." : "No Products"}
					</div>
				)}
				<Footer />
			</div>
		</div>
	)
}
