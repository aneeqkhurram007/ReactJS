import * as actionTypes from '../actions';
const initialState = {

    results: []
}
const reducer = (state = initialState, action) => {

    if (action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            results: state.results.concat({ id: new Date(), value: action.result })
        }
    }
    if (action.type === actionTypes.DELETE_RESULT) {
        const updateArray = state.results.filter(result => result.id !== action.resultElId);
        return {
            ...state,
            results: updateArray
        }
    }

    return state;
}
export default reducer;