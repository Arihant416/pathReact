/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Card,
	Col,
	Row,
	Badge,
	Collapse,
	Button,
	Modal,
	Image,
} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
function MyVerticallyCenteredModal(props) {
	// const [password, setPassword] = useState(null);
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					{props.id}-{props.name}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{/* <Image fluid src={props.image} /> */}
				<h4>Centered Modal</h4>
				<p>{props.description}</p>
				<h5 className='text-muted'>$ {props.price}</h5>
				{/* <input
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					onSubmit={
						password === '123456'
							? alert('Payment Successful')
							: alert('Failed Payment')
					}
				/> */}
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}
const List = props => {
	const [open, setOpen] = useState(false);
	const [modalShow, setModalShow] = React.useState(false);
	const { data } = props;
	if (!data || data.length === 0) {
		return (
			<div className='container'>
				<p className='text-center'>
					Sorry, the restaurant's seems to be closed right now. Please come back
					later!
				</p>
			</div>
		);
	}
	return (
		<Row>
			<Col>
				{data.map(item => {
					return (
						<Card className='mb-3'>
							<Card.Body>
								<div className='d-flex justify-content-between'>
									<div>
										<Card.Title>
											{item.name} -{' '}
											<span className='text-muted font-weight light'>
												{item.label ? item.label : 'No label'}
											</span>{' '}
										</Card.Title>
										<Card.Subtitle className='text-muted mb-2'>
											{new Date().toLocaleDateString()}
										</Card.Subtitle>
										<Badge variant='danger' className='mr-2'>
											{item.category}
										</Badge>
									</div>
									<img
										className='d-none d-md-block fluid justify-content-center'
										height='100px'
										src={item.image}
										alt={item.name}
									/>
								</div>
								<Card.Text>
									<Button
										onClick={() => setOpen(prevOpen => !prevOpen)}
										variant='dark'
									>
										{open ? 'Hide Details' : 'View Details'}
									</Button>
								</Card.Text>
								<Collapse in={open}>
									<div className='mt-4'>
										<ReactMarkdown source={item.description} />
										<Button
											variant='warning'
											onClick={() => setModalShow(true)}
										>
											Buy Recipe
										</Button>
										<MyVerticallyCenteredModal
											show={modalShow}
											id={item.id}
											image={item.image}
											desc={item.description}
											label={item.label}
											price={item.price}
											name={item.name}
											onHide={() => setModalShow(false)}
										/>
									</div>
								</Collapse>
							</Card.Body>
						</Card>
					);
				})}
			</Col>
		</Row>
	);
};
export default List;
