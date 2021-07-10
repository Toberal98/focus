import data from './initialState';
export default function productos(state = data.saldo, action){
    switch(action.type){
      case "RESTAR_SALDO":
      state = state - action.item
      return state
        default:
            return state;
    }
}
