import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const CourseContent = () => {
    return (
        <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    <Link to="/courses-details" className='mx-3 text-decoration-none fs-5'>Read More...</Link>
                </Card.Text >
                </Card.Body>
            </Card>
            </Col>
        ))}
    </Row>
    );
};

export default CourseContent;