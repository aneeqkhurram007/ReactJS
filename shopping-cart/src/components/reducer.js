const reducer = (state, action) => {
    switch (action.type) {
        case "Remove":
            return {
                ...state, item: state.item.filter((curEl) => curEl.id !== action.payload)
            }


        default:
            break;
    }
}
export default reducer