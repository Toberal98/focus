import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import MenuHome from '../../components/index';

const Home = () => (
  <Container fluid>
    <Row>
      <Col sm={8} md={8} xl={8} className="contenedor-product">
      <div className="d-flex justify-content-center pro"><h3>PRODUCTOS</h3></div>
      <MenuHome />
      </Col>
    </Row>
  </Container>
);

export default Home;
