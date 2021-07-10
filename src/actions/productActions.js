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
