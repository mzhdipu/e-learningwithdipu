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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis debitis vel quidem, reiciendis, dolor at cumque molestiae doloremque aliquid asperiores quam saepe inventore possimus minus unde distinctio repellat eius similique?</p>
                        <Button><Link to="/courses" className='text-white text-decoration-none fs-5 shadow-lg'>Get Started</Link></Button>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Home;