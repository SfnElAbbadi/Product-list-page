const initState = {
    products: [],
}
export const addToCart = (state = initState, action) => {
    let newProducts = Object.assign([],state.products);
    switch(action.type) {
        case 'ADD_TO_CART': 
            // check if Product already exist in Cart
            if(isProductInCart(newProducts, action.playload)) {                
                return updateQuantity(state, {newProducts, product: action.playload});
            } else {
                return addProduct(state, {newProducts, product: action.playload});
            }
        case 'REMOVE_FROM_CART':
            return removeProductFromCart(state, {newProducts, title: action.playload});
            
        default: 
            return state;
    }
}

const isProductInCart = (cart, product) => cart.some(({ title }) => title === product.title);
const addProduct = (state, {newProducts, product}) => {
    product.quantity = 1;
    newProducts.push(product);
    return {
        ...state,
        products: newProducts,
    }
}

const updateQuantity = (state, {newProducts, product}) => {
    newProducts.map(item => {
        if(item.title === product.title) {
            return item.quantity = product.quantity + 1;
        }
        return product.quantity;
    })
    return {
        ...state,
        products: newProducts,
    } 
}

const removeProductFromCart = (state, {newProducts, title}) => {
    newProducts = newProducts.filter(item => item.title !== title);    
    return {
        ...state,
        products: newProducts,
    } 
}