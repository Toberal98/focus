import data from './initialState';
export default function misProductos(state = data.misProductos, action){
    switch(action.type){
      case "ADD_MYPRODUCTS":
      return[...state, action.item]
        default:
            return state;
    }
}
