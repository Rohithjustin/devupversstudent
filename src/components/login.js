import React from "react";
import { Button, Form } from "react-bootstrap";
import './login.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';





const Login = () => {
  return (
    <div>
      {/* <form className='formcontainer'>
        <div className='inputtype'><label>Name :</label>
          <input type="text " /></div>
        <div className='inputtype'> <label>Password :</label>
          <input type="text " /></div>
        <Button variant="primary">Click Me</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
        <button>login</button>

      </form> */}
      <div><Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"className="mb-3" >login Form </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
      
     {/* <div class="col-md-12 col-sm-6 col-lg-1 text-white bg-primary">this width is 1/3 of the screen size</div>
     <div class="col-md-12 text-white bg-danger">this width is 2/3 of the screen size</div> */}
    <div className="inputtype"> <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwis9kcrX5cuE-X0Giio9qereC7UOPBAXvaSUaq5fUqgN1aYGVvyHd7tQa9vwnqRSs_SuGDp9MzN__OEl3kmJbMQ" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwis9kcrX5cuE-X0Giio9qereC7UOPBAXvaSUaq5fUqgN1aYGVvyHd7tQa9vwnqRSs_SuGDp9MzN__OEl3kmJbMQ" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwis9kcrX5cuE-X0Giio9qereC7UOPBAXvaSUaq5fUqgN1aYGVvyHd7tQa9vwnqRSs_SuGDp9MzN__OEl3kmJbMQ" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></div>
    </div>
  )
}

export default Login
