import { combineReducers } from 'redux';
import productos from './productosReducer';
import misProductos from './misProductosReducer';



const rootReducer = combineReducers({
    productos,
    misProductos

});

export default rootReducer;
