import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSignInAlt, FaUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand><Link to="/" className='text-decoration-none fw-bold text-white'>E-LearningWithDipu</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto">
                        <Link to="/courses" className='text-light mx-3 text-decoration-none fs-5'>Courses</Link>
                        <Link to="/faq" className='text-light mx-3 text-decoration-none fs-5'>Faq</Link>
                        <Link to="/blog" className='text-light mx-3 text-decoration-none fs-5'>Blog</Link>
                        <Link to="/login" className='text-light mx-3 text-decoration-none fs-5'><FaUserCircle/></Link>
                        <Link to="/registration" className='text-light mx-3 text-decoration-none fs-5'><FaSignInAlt/></Link>
                    </Nav> 
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;