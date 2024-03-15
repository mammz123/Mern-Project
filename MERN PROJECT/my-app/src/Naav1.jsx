import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Naav1.css';
import logo from './images/logo1.png'; 

function Naav1() {
  return (
    <div>
      <Navbar className='navbar'>
        <Container>
          <Navbar.Brand>
            <img
              style={{ borderRadius: "38px 0px 38px 0px" }}
              src={logo} 
              height="59" 
              alt=""
              className="falling-logo" 
            />
          </Navbar.Brand>
          <Nav className="me-auto" style={{ display: 'flex', justifyContent: 'center', width: '100%', marginLeft: "100px" }}>
            <Nav.Link className='nav1' style={{ paddingRight: "30px" }}><Link to="/home" style={{ textDecoration: "none", color: "white" }}>HOME</Link></Nav.Link>
            <Nav.Link className='nav1' style={{ paddingRight: "30px" }}> <Link to="/about" style={{ textDecoration: "none", color: "white" }}>ABOUT</Link></Nav.Link>
            <Nav.Link className='nav1' style={{ paddingRight: "30px" }}><Link to="/contact" style={{ textDecoration: "none", color: "white" }}>CONTACT</Link></Nav.Link>
            <Nav.Link className='nav1' style={{ paddingRight: "30px" }}><Link to="/portfolio" style={{ textDecoration: "none", color: "white" }}>PORTFOLIO</Link></Nav.Link>
          </Nav>
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Nav.Link className='nav1' style={{ color: "white", paddingRight: "20px" }}> <Link to="login" style={{ textDecoration: "none", color: "white" }}> LOGIN</Link></Nav.Link>
            <Nav.Link className='nav1' style={{ color: "white" }}> <Link to="signup" style={{ textDecoration: "none", color: "white" }}> SIGNUP</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Naav1;
