import { Card, Button, ListGroup } from 'react-bootstrap';

const CardPizza = ({ name, price, ingredients, img }) => {
  const formatPrice = (amount) => amount.toLocaleString('es-CL');

  return (
    <Card style={{ width: '18rem' }} className="shadow-sm mb-4">
      <Card.Img variant="top" src={img} alt={name} style={{ height: '180px', objectFit: 'cover' }} /> 
      <Card.Body className="text-center">
        <Card.Title className="text-capitalize">{name}</Card.Title>
        <hr />
        
        <h6>Ingredientes:</h6>
        <ListGroup variant="flush" className="mb-3">
          {ingredients.map((ingredient, index) => (
            <ListGroup.Item key={index} className="text-capitalize border-0 py-1 px-0">
              🍕 {ingredient}
            </ListGroup.Item>
          ))}
        </ListGroup>

        <h3 className="text-danger my-3">${formatPrice(price)}</h3>

        <div className="d-flex justify-content-between">
          <Button variant="info">Ver más 👀</Button>
          <Button variant="danger">Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;