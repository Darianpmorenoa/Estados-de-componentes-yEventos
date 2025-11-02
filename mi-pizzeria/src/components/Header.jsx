import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="py-5 bg-dark text-white text-center"> 
      <Container>
        <h1 className="display-4 fw-bolder">¡Pizzería Mamma Mia! 🍕</h1> 
        <p className="lead mb-0">¡Tenemos las mejores pizzas que puedas encontrar!</p> 
      </Container>
    </header>
  );
};

export default Header;
