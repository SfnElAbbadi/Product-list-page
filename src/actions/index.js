export const addToCart = product => ({
    type: 'ADD_TO_CART',
    playload: product
});

export const removeFromCart = productTitle => ({
    type: 'REMOVE_FROM_CART',
    playload: productTitle
});

export const setProductList = productList => ({
    type: 'SET_PRODUCT_LIST',
    playload: productList
});

export const filterByTitle = productTitle => ({
    type: 'FILTER_BY_TITLE',
    playload: productTitle
});

export const filterByPrice = productTitle => ({
    type: 'FILTER_BY_PRICE',
    playload: productTitle
});

export const hideOverlay = () => ({
    type: 'HIDE_OVERLAY'
});

export const showOverlay = () => ({
    type: 'SHOW_OVERLAY'
});

export const openCart = () => ({
    type: 'OPEN_CART'
});

export const closeCart = () => ({
    type: 'CLOSE_CART'
});