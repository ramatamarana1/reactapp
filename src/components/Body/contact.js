import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/container';

function contact() {
  return (
    <Container>
    <div>
      
       <Form>
        
       <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="NAME" placeholder="Name" />
      </Form.Group>
    
        

        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        submit
      </Button>
    </Form>
     
      
    </div>
    </Container>
    
  )
}

export default contact

