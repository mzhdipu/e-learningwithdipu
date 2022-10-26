import "./Login.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";



const Login = () => {
    const {googleSignIn} = useContext(AuthContext)
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
    return (
        <Container>
            <Row>
                <Form className='w-50 m-auto bg-light mt-5 p-5 rounded shadow-lg'>
                    <h2 className='mt-3 mb-4'>Login Now</h2>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <div className='text-center d-flex m-auto w-50'>
                        <Button onClick={hangleGoogleLogin} variant="danger rounded-0 m-2 fs-5 w-50"><FaGoogle/></Button>
                        <Button variant="secondary rounded-0 m-2 fs-5 w-50"><FaGithub/></Button>
                    </div>

                    <p className='mt-3'>New This Website ? <Link to="/registration">Please Registration</Link> </p>
                </Form>
            </Row>
        </Container>
      );
};

export default Login;