export default function Admin() {
	return (
		<div>
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
					<tr className="align-middle">
						<th scope="row">1</th>
						<td>
							<img
								src="https://freepngimg.com/thumb/cheese/10-cheese-png-image-thumb.png"
								alt="cheese view"
								style={{ objectFit: "contain", width: "70px", height: "70px" }}
							/>
						</td>
						<td className="text-truncate" style={{ maxWidth: "1px" }}>
							Gauda
						</td>
						<td className="text-start text-truncate" style={{ maxWidth: "1px" }}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut corporis cupiditate
							delectus, deleniti dignissimos dolorum eaque earum eum excepturi expedita modi nesciunt non
							obcaecati quam, quas rem sapiente sint!Consectetur dignissimos et expedita impedit maiores
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
					<tr className="align-middle">
						<th scope="row">2</th>
						<td>
							<img
								src="https://freepngimg.com/thumb/cheese/10-cheese-png-image-thumb.png"
								alt="cheese view"
								style={{ objectFit: "contain", width: "70px", height: "70px" }}
							/>
						</td>
						<td>Chedder</td>
						<td className="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit</td>
						<td>
							<button type="button" className="btn  btn-outline-primary btn-sm me-3">
								Change
							</button>
							<button type="button" className="btn btn-outline-danger btn-sm">
								Delete
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
