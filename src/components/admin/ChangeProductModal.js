import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Modal from "react-bootstrap/Modal"
import Row from "react-bootstrap/Row"
import { productByIdRef } from "../../middleware/bindings"
import { app } from "../../middleware/firebase"
import { setDoc } from "firebase/firestore"
import Image from "react-bootstrap/Image"

export default function ChangeProductModal({ product, show, setShow }) {
	const [validated, setValidated] = useState(false)
	const [form, setForm] = useState({
		title: product.title,
		description: product.description,
		img: product.img
	})

	const handleClose = () => setShow(false)
	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}
	const handleSubmit = async event => {
		event.preventDefault()

		console.log(event.currentTarget.checkValidity())
		setValidated(true)
		if (event.currentTarget.checkValidity()) {
			await setDoc(productByIdRef(app, product.id), form, { merge: true })

			setValidated(false)
			handleClose()
		}
	}
	return (
		<>
			<Modal show={show} centered size="lg" onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Update product</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row>
							<Col xs={12} md={4} className="d-flex flex-column align-content-center">
								<Image src={product.img}></Image>
								<Button variant="outline-primary">update image</Button>
							</Col>
							<Col xs={12} md={8}>
								<Form noValidate validated={validated} onSubmit={handleSubmit}>
									<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
										<Form.Label>Title</Form.Label>
										<Form.Control
											autoFocus
											required
											name="title"
											value={form.title}
											onChange={e => handleChange(e)}
										/>
										<Form.Control.Feedback type="invalid">Title is required.</Form.Control.Feedback>
									</Form.Group>
									<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
										<Form.Label>Product description</Form.Label>
										<Form.Control
											as="textarea"
											rows={3}
											name="description"
											value={form.description}
											onChange={e => handleChange(e)}
											required
										/>
										<Form.Control.Feedback type="invalid">Description is required.</Form.Control.Feedback>
									</Form.Group>
									<div className="d-flex justify-content-end">
										<Button type="submit">Update product</Button>
									</div>
								</Form>
							</Col>
						</Row>
					</Container>
				</Modal.Body>
			</Modal>
		</>
	)
}
