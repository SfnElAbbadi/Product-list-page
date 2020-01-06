const initState = {
    products : []
}
export const addToCart = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART': 
            let newProducts = Object.assign([],state.products)
            newProducts.push(action.playload);
            return {
                ...state,
                products: newProducts
            }
        default: 
            return state;
    }
}