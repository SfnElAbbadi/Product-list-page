const initState = {
    products: [],
    // isCartOpen: false,
}
export const addToCart = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART': 
            let newProducts = Object.assign([],state.products)
            newProducts.push(action.playload);
            return {
                ...state,
                products: newProducts,
                // isCartOpen: true
            }
        default: 
            return state;
    }
}
