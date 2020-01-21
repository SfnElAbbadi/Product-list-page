import { combineReducers } from 'redux';
import { overlay } from './overlay';
import cart from './cart';
import common from './common'

const rootReducer = combineReducers({
    // cart: addToCart,
    overlay: overlay,
    // handleCart: handleCart
    cart,
    common,
});

export default rootReducer;