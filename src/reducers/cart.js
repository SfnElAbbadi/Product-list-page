const initState = {
    isCartOpen: false,
}
export const handleCart = (state = initState, action) => {
    switch(action.type) {
        case 'OPEN_CART': 
            return {
                isCartOpen: true
            }
        case 'CLOSE_CART': 
            return {
                isCartOpen: false
            }
        default: 
            return state;
    }
}
