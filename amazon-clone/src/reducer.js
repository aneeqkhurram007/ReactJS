export const initialState = {
    basket: [],
    loggedinuser: null

}
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':

            console.log("reducer", ...state.basket);
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'SET_LOGIN':
            return {
                ...state,
                loggedinuser: action.user
            }
        case 'REMOVE_FROM_CART':
            let newCart = [...state.basket]
            // newCart.filter(product => product.id !== action.id)
            // // console.log(newCart);

            const index = state.basket.findIndex((ele) => ele.id === action.id);
            if (index >= 0) {
                newCart.splice(index, 1)
            } else {
                console.log('There were errors while removing');
            }
            return { ...state, basket: newCart }
        default:
            break;
    }
}
export default reducer