import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Product from "../components/Product"

export default function Home({ products }) {
	return (
		<div className="home-page">
			<div className="home-page-wrapper">
				<Navbar />
				{products.length ? (
					products.map(product => <Product key={product.id} />)
				) : (
					<div className="h1 text-center" style={{ height: "100vh" }}>
						Loading...
					</div>
				)}
				<Footer />
			</div>
		</div>
	)
}
