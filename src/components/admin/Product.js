import React from "react"

export default function Product({ product, index }) {
	return (
		<tr className="align-middle" key={product.id}>
			<th scope="row">{index}</th>
			<td>
				<img
					src="https://freepngimg.com/thumb/cheese/10-cheese-png-image-thumb.png"
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
				<button type="button" className="btn  btn-outline-primary btn-sm me-3">
					Change
				</button>
				<button type="button" className="btn btn-outline-danger btn-sm">
					Delete
				</button>
			</td>
		</tr>
	)
}
