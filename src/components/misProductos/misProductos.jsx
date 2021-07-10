import React from 'react'
import {connect} from 'react-redux'
import {Image,Col} from 'react-bootstrap';

const misProductos = ({misProductos}) => (
    <>
      <Col>
        <div className="contenedor-dispensados">
          {
            misProductos.map(m=>(
              <Image src={m.thumbnail} thumbnail className="imagenes-dispensados" />
            ))
          }
        </div>
      </Col>
    </>
)

function mapStateToProps(state, props){
  return{
    misProductos: state.misProductos
  }
}

export default connect(mapStateToProps,null)(misProductos)
