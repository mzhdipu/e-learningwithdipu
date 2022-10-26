import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import "./CourseContent.css"

const CourseContent = ({course}) => {
    const {_id, title, image_url, details} = course;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {
                        details.length > 200 ?
                        <p>{details.slice(0, 250)} <Link to={`/courses-details/${_id}`}>Read More...</Link> </p>
                        : 
                        <p>{details}</p>
                    }
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseContent;