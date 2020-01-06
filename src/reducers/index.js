import { combineReducers } from 'redux';
import { addToCart } from './products';

const rootReducer = combineReducers({
    addToCart
});

export default rootReducer;