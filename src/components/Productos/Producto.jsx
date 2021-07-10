import React from 'react'
import {Card,Button, Col, Image} from 'react-bootstrap';
import {connect} from 'react-redux'

const Producto = ({producto}) => (
    <>

      <Col md={4} sm={4}>
        <Card className="imagen-producto my-2">
          <Image src={producto.thumbnail} thumbnail className="producto" />
          <Card.Body>
            <Card.Title>{producto.name}, ${producto.precio}</Card.Title>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
)
myFunction =(tiempo)=>{
   setInterval(
     function(){
        alert("Hello");
      }, tiempo);
 }

export default Producto
