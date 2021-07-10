export function updateProduct(item){
  return{
    type:"UPDATE_STATE_PRODUCTS",
    item:item
  }
}


export function addProduct(item){
  return{
    type:"ADD_MYPRODUCTS",
    item:item
  }
}

export function restarSaldo(item){
  return{
    type:"RESTAR_SALDO",
    item:item
  }
}
