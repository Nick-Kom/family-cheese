import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import AddProductModal from "./AddProductModal"
import Product from "../../components/admin/Product"
import { LoadingProductsContext, ProductsContext } from "../../context/MainContext"
import FirebaseService from "../../services/FirestoreService"

export default function Admin() {
	const loading = useContext(LoadingProductsContext)
	const products = useContext(ProductsContext)

	const navigate = useNavigate()

	const onMainPageNavigate = event => {
		event.preventDefault()
		navigate("/")
	}

	const onLogout = async event => {
		await FirebaseService.logout()
		console.log("Signed Out")
		onMainPageNavigate(event)
	}

	return (
		<div className="container">
			<header>
				<div className="d-flex flex-column flex-md-row align-items-center">
					<a
						href="/"
						className="d-flex align-items-center text-dark text-decoration-none"
						onClick={onMainPageNavigate}
					>
						<span className="fs-4 fw-bold">Cheese family admin</span>
					</a>

					<nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
						<button className="btn btn-light btn-sm" onClick={onLogout}>
							Logout
						</button>
					</nav>
				</div>
			</header>

			<main>
				<div className="container mt-5 p-0">
					<div className="row justify-content-center align-content-center">
						<div className="col col-12 text-end">
							<AddProductModal></AddProductModal>
						</div>
					</div>

					{products.length ? (
						<div className="row justify-content-center align-content-center">
							<div className="col col-12">
								<table className="table table-hover w-100">
									<thead>
										<tr>
											<th className="col-1">#</th>
											<th className="col-2">Image</th>
											<th className="col-3">Title</th>
											<th className="col-4">Text</th>
											<th className="col-2">Actions</th>
										</tr>
									</thead>
									<tbody>
										{products.map((product, index) => (
											<Product key={product.id} product={product} index={++index} />
										))}
									</tbody>
								</table>
							</div>
						</div>
					) : (
						<div className="text-center h3">{loading ? "Loading..." : "No Products"}</div>
					)}
				</div>
			</main>
		</div>
	)
}
