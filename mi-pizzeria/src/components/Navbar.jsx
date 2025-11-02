import React from 'react';
import { Navbar as BNavbar, Container, Nav, Button } from 'react-bootstrap'; 

const formatTotal = (total) => {
  return total.toLocaleString('es-CL'); }

const Navbar = ({ onViewChange }) => {
  const total = 25000;
  const token = false;

  const totalFormateado = formatTotal(total);

  return (
    <BNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BNavbar.Brand href="#">Home</BNavbar.Brand> 
        
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {token ? (
              <>
                <Button variant="outline-light" className="mx-2">Profile</Button>
                <Button variant="outline-danger" className="mx-2">Logout</Button>
              </>
            ) : (
              <>
                <Button 
                  variant="outline-light" 
                  className="mx-2"
                  onClick={() => onViewChange('login')}
                >
                  Login
                </Button>
                <Button 
                  variant="outline-success" 
                  className="mx-2"
                  onClick={() => onViewChange('register')} 
                >
                  Register
                </Button>
              </>
            )}
            
            <Button variant="warning" className="mx-2">
              Total: $ {totalFormateado}
            </Button>
            
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
};

export default Navbar;