import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event)=>{
    event.preventDefault();
    setAuthenticate(true);
    navigate("/")
  }
 
  return (
    <>
      <Container className="d-flex justify-content-center mt-5">
        <Form style={{ width: "400px" }} onSubmit={(event)=>loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="danger" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default LoginPage
