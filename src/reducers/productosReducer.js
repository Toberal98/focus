import data from './initialState';
export default function productos(state = data.productos, action){
    switch(action.type){
      case "ADD_PRODUCT":
      return[...state, action.item]
      case "UPDATE_STATE_PRODUCTS":
        state = action.item
        return state;
      case 'REMOVE_PRODUCT':
      //state =  state.filter( i => i.id !== action.item.id)
      return state

        default:
            return state;
    }
}
