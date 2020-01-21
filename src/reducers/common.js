const initState = {
    productList : []
}

export default (state = initState, action) => {
    let newProducts = Object.assign([],state.productList);

    switch(action.type) {
        case 'FILTER_BY_TITLE':
            console.log('FILTER_BY_TITLE',action);
            if(action.playload !== '') {
                return filterProductsByTitle(state, {newProducts, title: action.playload});
            } else {
                return state;
            }
        case 'SET_PRODUCT_LIST':
            console.log(action);
            
            return {
                ...state,
                productList: action.playload
            };
        default:
            return state;
    }

}

const filterProductsByTitle = (state, {newProducts, title}) => {
    console.log(title);

    newProducts = newProducts.filter(item => item.title.includes(title));
    console.log(state);
    
    return {
        ...state,
        productList: newProducts,
    }

}