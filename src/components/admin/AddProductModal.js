import React, { useState } from "react"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

import FirebaseService from "../../services/FirestoreService"

export default function AddProductModal() {
	const [validated, setValidated] = useState(false)
	const [show, setShow] = useState(false)
	const [form, setForm] = useState({
		title: "",
		description: "",
		img: ""
	})

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}
	const handleSubmit = async event => {
		event.preventDefault()

		setValidated(true)
		if (event.currentTarget.checkValidity()) {
			await FirebaseService.addProduct(form)
			setForm({
				title: "",
				description: ""
			})
			setValidated(false)
			handleClose()
		}
	}
	return (
		<>
			<Button variant="outline-primary" onClick={handleShow}>
				add new product
			</Button>

			<Modal show={show} centered size="lg" onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add product</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row>
							<Col xs={12} md={4}>
								<Button variant="outline-primary">select new image</Button>
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
										<Button type="submit">Submit form</Button>
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
