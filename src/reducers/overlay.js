const initState = {
    isShown: false,
}
export const overlay = (state = initState, action) => {
    switch(action.type) {
        case 'SHOW_OVERLAY': 
            return {
                isShown: true
            }
        case 'HIDE_OVERLAY': 
            return {
                isShown: false
            }
        default:
            return state;
    }
}