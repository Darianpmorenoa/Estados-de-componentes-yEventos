import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5"> 
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; 2021 - Pizzería Mamma Mia! - Todos los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;