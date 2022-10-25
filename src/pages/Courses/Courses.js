import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
        <div>
            <h1>This is Course Page</h1>
            <Link to="/courses-details" className='mx-3 text-decoration-none fs-5'>Go to course Details</Link>
        </div>
    );
};

export default Courses;