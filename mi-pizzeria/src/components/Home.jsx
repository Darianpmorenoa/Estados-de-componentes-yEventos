import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header.jsx'; 
import CardPizza from './CardPizza.jsx';

const Home = () => {
  return (
  <>
   <Header />
  
   <Container className="my-5">
  <h2 className="text-center mb-4">Nuestro Menú</h2>
  
   <Row className="justify-content-center">
   {/* Pizza 1: Napolitana */}
   <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
   <CardPizza
   name="Napolitana"
   price={5950}
   ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
   img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
   />
  </Col>
   {/* Pizza 2: Vegetariana */}
  <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
   <CardPizza
   name="Vegetariana"
   price={6500}
   ingredients={["mozzarella", "pimientos", "champiñones", "cebolla"]}
   img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-3296853_640.jpg?alt=media&token=60f1b2b8-6725-467a-9a99-04d49a3c9e6d"
   />
 </Col>
 <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
 <CardPizza
name="Pepperoni"
 price={7200}
 ingredients={["mozzarella", "salsa de tomate", "pepperoni"]}
 img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-4952500_640.jpg?alt=media&token=b367104b-703c-4d5f-9721-a20c35489f6d"
 />
 </Col>
 </Row>
 </Container>
 </>
);
};

export default Home;
  