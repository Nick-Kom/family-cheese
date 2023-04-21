import { useState } from "react"
import ChangeProductModal from "./ChangeProductModal"
import Button from "react-bootstrap/Button"
import FirebaseService from "../../services/FirestoreService"

export default function Product({ product, index }) {
	const [showUpdateModal, setShowUpdateModal] = useState(false)

	const handleTableItemClick = e => {
		e.stopPropagation()
		console.log("onTableItemClick")
		setShowUpdateModal(true)
	}
	const handleChangeBtnClick = e => {
		e.preventDefault()
		e.stopPropagation()
		console.log("onBtnClick")
		setShowUpdateModal(true)
	}
	const handleDeleteProduct = async e => {
		e.preventDefault()
		e.stopPropagation()
		console.log("onDelete")
		await FirebaseService.deleteProductById(product.id)
	}
	return (
		<>
			<ChangeProductModal product={product} show={showUpdateModal} setShow={setShowUpdateModal} />
			<tr className="align-middle" key={product.id} onClick={handleTableItemClick}>
				<th scope="row">{index}</th>
				<td>
					<img
						src={product.img}
						alt="cheese view"
						style={{ objectFit: "contain", width: "70px", height: "70px" }}
					/>
				</td>
				<td className="text-truncate" style={{ maxWidth: "1px" }}>
					{product.title}
				</td>
				<td className="text-start text-truncate" style={{ maxWidth: "1px" }}>
					{product.description}
				</td>
				<td>
					<Button variant="outline-primary" size={"sm"} onClick={handleChangeBtnClick}>
						Change
					</Button>

					<button type="button" className="btn btn-outline-danger btn-sm ms-3" onClick={handleDeleteProduct}>
						Delete
					</button>
				</td>
			</tr>
		</>
	)
}
