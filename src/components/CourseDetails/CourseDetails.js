import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNavber from '../../pages/Shared/LeftSideNavber/LeftSideNavber';
import Card from 'react-bootstrap/Card';
import "./CourseDetails.css"
import { Link, useLoaderData } from 'react-router-dom';


const CourseDetails = () => {
    const coursesData = useLoaderData();
    const {_id, title, image_url, details} = coursesData;
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
                                <Card.Img className='card-image' variant="top" src={image_url} />
                                <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {details}
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