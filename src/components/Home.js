import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Product from "../components/Product"

export default function Home() {
	return (
		<div className="home-page">
			<div className="home-page-wrapper">
				<Navbar />
				<Product />
				<Product />
				<Footer />
			</div>
		</div>
	)
}
