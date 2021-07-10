import data from './initialState';
export default function productos(state = data.misProductos, action){
    switch(action.type){
      case "ADD_MYPRODUCTS":
      return[...state, action.item]
        default:
            return state;
    }
}
