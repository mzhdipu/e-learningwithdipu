import React from 'react';
import "./Cart.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row } from 'react-bootstrap';

const Cart = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Form className='w-50 m-auto bg-light mt-5 p-4 rounded shadow-lg'>

                        <h2 className='mt-3 mb-4'>Get Premium Access</h2>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Full Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="For 3 Months" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;