import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseContent from '../../components/CourseContent/CourseContent';
import LeftSideNavber from '../Shared/LeftSideNavber/LeftSideNavber';

const Category = () => {
    const categoryCouree = useLoaderData();
    console.log(categoryCouree)
    return (
        <div>
            <Container>
                <Row>

                    <Col lg={3} className="mt-5">
                        <LeftSideNavber></LeftSideNavber>
                    </Col>

                    <Col lg={9} className="bg-light p-5">
                        <h2 className='mt-3 mb-5'>Learn HTML!</h2>
                        <p>If you think of your favourite websites - what stands out and why? Is it the navigation and how easily things are found? This all boils down to website structure and this free online HTML certification will help you in understanding best practices fo</p>
                        
                    </Col> 
                </Row>
            </Container>
            
        </div>
    );
};

export default Category;