import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <Container>
            <Row className='d-flex justify-content-center align-items-center text-center' style={{height: "100vh"}}>
                <div>
                    <h1>Page Not Found</h1>
                    <Button variant="primary"><Link to="/" className='text-white text-decoration-none fw-bold'>Go to Home</Link></Button>{' '}
                </div>
            </Row>
        </Container>
    );
};

export default NotFound;