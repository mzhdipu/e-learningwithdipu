import React, { useContext, useState } from 'react';
import "./Registration.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Registration = () => {
    const {googleSignIn, gitHubSignIn, createUser} = useContext(AuthContext)
    const [error, setError] = useState('');

    const gitProvider = new GithubAuthProvider();
    const provider = new GoogleAuthProvider();

    const hangleGoogleLogin =()=>{
        googleSignIn(provider)
            .then(result =>{
                const user = result.user;
                console.log(user)
            })
            .catch(error=>{
                console.log(error)
            })
    }

    const hangleGithubLogin =()=>{
        gitHubSignIn(gitProvider)
            .then(result =>{
                const user = result.user;
                console.log(user)
            })
            .catch(error=>{
                console.log(error)
            })
    }

    
const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
}
    return (
        <div>
            <Container>
                <Row>
                    <Form onSubmit={handleSubmit}className='w-50 m-auto bg-light mt-5 p-4 rounded shadow-lg'>

                        <h2 className='mt-3 mb-4'>Registration Now</h2>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Full Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="terms and conditions" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                        <div className='text-center d-flex m-auto w-50'>
                        <Button onClick={hangleGoogleLogin} variant="danger rounded-0 m-2 fs-5 w-50"><FaGoogle/></Button>
                        <Button onClick={hangleGithubLogin} variant="secondary rounded-0 m-2 fs-5 w-50"><FaGithub/></Button>
                    </div>

                    <p className='mt-3'>Already Have an Account ? <Link to="/login">Please Login</Link> </p>
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                   </Form>
                </Row>
            </Container>
        </div>
    );
};

export default Registration;