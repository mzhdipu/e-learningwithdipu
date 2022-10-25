import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNavber from '../../pages/Shared/LeftSideNavber/LeftSideNavber';
import Card from 'react-bootstrap/Card';
import "./CourseDetails.css"
import { Link } from 'react-router-dom';


const CourseDetails = () => {
    return (
        <div>
            <Container>
                <Row>

                    <Col lg={3} className="bg-secondary ">
                        <LeftSideNavber></LeftSideNavber>
                    </Col>

                    <Col className="bg-light p-5">
                        <Row>
                            <Col>
                            <Card>
                                <Card.Img className='card-image' variant="top" src="https://images.pexels.com/photos/1279109/pexels-photo-1279109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                    <Link to="/cart" className='mx-3 text-decoration-none fs-5'>Get Premium Access</Link>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    </Col> 
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;