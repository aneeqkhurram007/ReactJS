export const initialState = {
    basket: [],
    loggedinuser: null

}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':

            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'SET_LOGIN':
            return {
                ...state,
                loggedinuser: action.user
            }

        default:
            break;
    }
}
export default reducer