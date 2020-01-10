import { combineReducers } from 'redux';
import { addToCart } from './products';
import { overlay } from './overlay';
import { handleCart } from './cart';

const rootReducer = combineReducers({
    cart: addToCart,
    overlay: overlay,
    handleCart: handleCart
});

export default rootReducer;