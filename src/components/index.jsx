import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Row} from 'react-bootstrap'
import Producto from './Productos/Producto'
import {updateProduct} from '../actions/productActions'
class Index extends Component {
  constructor(props) {
    super(props);
  }

  getRandomArbitrary =(min, max)=> {
    return (Math.random() * (max - min) + min).toFixed(2);
    }

  componentDidMount() {
    axios.get('https://vending-machine-test.vercel.app/api/products')
    .then(resp=>{
          let productos = resp.data.data;
          productos.map(p=>{
            p.precio = this.getRandomArbitrary(4,20);
          })
          this.props.updateProduct(productos);
    })
    .catch(error=>{
      console.log(error)
    })
  }

  render() {
    const producto = this.props.productos
    return (
      <>
      <Row>
        {
          producto.map(p=>(
            <Producto producto={p}/>
          ))
        }
      </Row>
      </>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    updateProduct: (item)=>dispatch(updateProduct(item))
  }
}

function mapStateToProps(state, props){
  return{
    productos: state.productos
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Index);
