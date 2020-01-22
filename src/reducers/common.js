const initState = {
    productList : []
}

export default (state = initState, action) => {
    let newProducts = Object.assign([],state.productList);

    switch(action.type) {
        case 'FILTER_BY_TITLE':
            if(action.playload !== '') {
                return filterProductsByTitle(state, {newProducts, title: action.playload});
            } else {
                return state;
            }
        case 'SET_PRODUCT_LIST':            
            return {
                ...state,
                productList: action.playload
            };
        default:
            return state;
    }

}

const filterProductsByTitle = (state, {newProducts, title}) => {
    newProducts = newProducts.filter(item => item.title.includes(title));    
    return {
        ...state,
        productList: newProducts,
    }

}