import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <Button variant="primary"><Link to="/">Go to Home</Link></Button>{' '}
        </div>
    );
};

export default NotFound;