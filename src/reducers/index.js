import { combineReducers } from 'redux';
import productos from './productosReducer';
import misProductos from './misProductosReducer';
import saldo from './saldoReducer'



const rootReducer = combineReducers({
    productos,
    misProductos,
    saldo

});

export default rootReducer;
