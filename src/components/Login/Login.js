import "./Login.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";



const Login = () => {
    const {googleSignIn, gitHubSignIn, signIn} = useContext(AuthContext)
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

    signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
}

    return (
        <Container>
            <Row>
                <Form onSubmit={handleSubmit} className='w-50 m-auto bg-light mt-5 p-5 rounded shadow-lg'>
                    <h2 className='mt-3 mb-4'>Login Now</h2>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <div className='text-center d-flex m-auto w-50'>
                        <Button onClick={hangleGoogleLogin} variant="danger rounded-0 m-2 fs-5 w-50"><FaGoogle/></Button>
                        <Button onClick={hangleGithubLogin} variant="secondary rounded-0 m-2 fs-5 w-50"><FaGithub/></Button>
                    </div>

                    <p className='mt-3'>New This Website ? <Link to="/registration">Please Registration</Link> </p>

                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form>
            </Row>
        </Container>
      );
};

export default Login;