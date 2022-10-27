import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseContent from '../../components/CourseContent/CourseContent';
import LeftSideNavber from '../Shared/LeftSideNavber/LeftSideNavber';


const Courses = () => {
    const courses = useLoaderData();
    
    return (
        <div>
            <Container>
                <Row>

                    <Col lg={3} className="mt-5">
                        <LeftSideNavber></LeftSideNavber>
                    </Col>

                    <Col lg={9} className="bg-light p-5">
                        <h2 className='mt-3 mb-5'>Show All Course Content</h2>
                        {
                            courses.map(course => <CourseContent course={course}></CourseContent>)
                        }
                        
                    </Col> 
                </Row>
            </Container>
            
        </div>
    );
};

export default Courses;