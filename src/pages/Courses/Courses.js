import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseContent from '../../components/CourseContent/CourseContent';
import LeftSideNavber from '../Shared/LeftSideNavber/LeftSideNavber';


const Courses = () => {
    return (
        <div>
            <Container>
                <Row>

                    <Col lg={3} className="bg-secondary ">
                        <LeftSideNavber></LeftSideNavber>
                    </Col>

                    <Col lg={9} className="bg-light p-5">
                        <h2 className='mt-3 mb-5'>Show All Course Content</h2>
                        <CourseContent></CourseContent>
                    </Col> 
                </Row>
            </Container>
            
        </div>
    );
};

export default Courses;