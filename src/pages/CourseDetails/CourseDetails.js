import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
    return (
        <div>
            <h1>This is Courses Detials Pages</h1>
            <Link to="/courses-details" className='mx-3 text-decoration-none fs-5'>Get the premium access</Link>
        </div>
    );
};

export default CourseDetails;