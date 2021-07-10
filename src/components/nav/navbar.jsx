import React from 'react';
import {Navl} from 'react-bootstrap'
import {connect} from 'react-redux'

const Nav = ({saldo}) => (
    <>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid ">
        <div className="Vending">
          <h3 >Vending Machine</h3>
        </div>
        <div className="Vending2">
          <h3 >Saldo: ${saldo}</h3>
        </div>
      </div>
    </nav>
    </>
)

function mapStateToProps(state, props){
  return{
    saldo: state.saldo
  }
}

export default connect(mapStateToProps)(Nav)
