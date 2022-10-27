import React from 'react';
import "./Home.css"
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='hero-section'>
            <Container className='hero-content'>
                <Row>
                    <div className='bg-light p-5 rounded shadow-lg'>
                        <h1 className='text-uppercase'>Are you Ready To <span className='text-primary text-uppercase fw-bold'>Learn !!</span></h1>
                        <p>Coding literally turned your life around. It is one of the most rewarding careers Ive had to date. Once you get in, the possibilities are endless.</p>
                        <Button><Link to="/courses" className='text-white text-decoration-none fs-5 shadow-lg'>Get Started</Link></Button>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Home;