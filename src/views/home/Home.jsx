import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import MenuHome from '../../components/index';
import Dispensados from '../../components/misProductos/misProductos';
import {connect} from 'react-redux'

const Home = ({ misProductos, saldo }) => {
const total = misProductos.reduce(function(suma,c) { return parseFloat(suma) + parseFloat(c.precio)},0)
  return (
    <Container fluid>
      <Row>
        <Col sm={8} md={8} xl={8} className="contenedor-product">
        <div className="d-flex justify-content-center pro"><h3>PRODUCTOS</h3></div>
        <MenuHome />
        </Col>
        <Col sm={4} md={4} xl={4} className="contenedor-misProdcutos">
            <div className="d-flex justify-content-center pro"><h3>Dispensados</h3></div>
            <Dispensados />
            <div className="d-flex justify-content-start pro"><h3>Total:  ${total.toFixed(2)}</h3></div>
            <div className="d-flex justify-content-start pro"><h3>Vuelto: ${saldo.toFixed(2)}</h3></div>
        </Col>
      </Row>
    </Container>
  )
}
function mapStateToProps(state, props){
  return{
    misProductos: state.misProductos,
    saldo: state.saldo
  }
}

export default connect(mapStateToProps,null)(Home);
