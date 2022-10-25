import React from 'react';
import "./Login.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <Container>
            <Row>
                <Form className='w-50 m-auto bg-light mt-5 p-5 rounded shadow-lg'>
                    <h2 className='mt-3 mb-4'>Login Now</h2>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <div className='text-center d-flex m-auto w-50'>
                        <Button variant="danger rounded-0 m-2 fs-5 w-50"><FaGoogle/></Button>
                        <Button variant="secondary rounded-0 m-2 fs-5 w-50"><FaGithub/></Button>
                    </div>

                    <p className='mt-3'>New This Website ? <Link to="/registration">Please Registration</Link> </p>
                </Form>
            </Row>
        </Container>
      );
};

export default Login;