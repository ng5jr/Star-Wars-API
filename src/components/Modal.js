import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

export default function InfoModal({ title, info }) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Button className="nextButton" onClick={handleShow}>
				More Info
			</Button>

			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header style={{ backgroundColor: "black", color: "white" }}>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ backgroundColor: "black", color: "white" }}>
					<ul style={{ listStyle: "none" }}>
						<li>
							<span style={{ fontWeight: "bold" }}> Hair Color:</span> {info.hair_color}
						</li>
						<li>
							<span style={{ fontWeight: "bold" }}>Skin Color:</span> {info.skin_color}
						</li>
						<li>
							<span style={{ fontWeight: "bold" }}>Eye Color</span> {info.eye_color}
						</li>
						<li>
							<span style={{ fontWeight: "bold" }}>Gender: </span> {info.gender}
						</li>
					</ul>
				</Modal.Body>
				<Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
					<Button variant="secondary" onClick={handleClose} style={{ backgroundColor: "black", color: "white" }}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
