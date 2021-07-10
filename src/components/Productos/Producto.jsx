import React, {useState,useEffect} from 'react'
import {Card,Button, Col, Image,Spinner} from 'react-bootstrap';
import {connect} from 'react-redux'
import {addProduct} from '../../actions/productActions'

const Producto = ({producto, addProduct}) => {
  const [spinner, setSpiner] = useState(false);
  var tiempo = null;
  useEffect(() => {

     clearTimeout(tiempo);

})
    return (
      <>

        <Col md={4} sm={4}>
          <Card className="imagen-producto my-2">
            <Image src={producto.thumbnail} thumbnail className="producto" />
            <Card.Body>
              <Card.Title>{producto.name}, ${producto.precio}</Card.Title>
              <Button variant="primary" onClick={()=>{myFunction(producto); setSpiner(true)}}>Comprar</Button>
                {
                  <Spinner animation="border" role="status" className={(spinner)?"" :"invisible"}>
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                }
            </Card.Body>
          </Card>
        </Col>
      </>
    )
    function myFunction (producto){
      tiempo = setTimeout(function(){
          addProduct(producto)
          setSpiner(false)
         },

         producto.preparation_time*100);

     }



}

function mapDispatchToProps(dispatch){
  return {
    addProduct:(item) => dispatch(addProduct(item))
  }
}
export default connect(null,mapDispatchToProps)(Producto)
