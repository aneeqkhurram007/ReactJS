const reducer = (state, action) => {
    switch (action.type) {
        case "Remove":
            return {
                ...state, item: state.item.filter((curEl) => curEl.id !== action.payload)
            }
        case "ClearAll":
            return {
                ...state, item: []
            }
        case "IncrementItem":
            return {
                ...state,
                item: state.item.map((currEl) => {
                    if (currEl.id === action.payload) {
                        return {
                            ...currEl, quantity: currEl.quantity + 1
                        }
                    }
                    return currEl
                })
            }
        case "DecrementItem":
            return {
                ...state,
                item: state.item.map((currEl) => {
                    if (currEl.id === action.payload && currEl.quantity > 0) {
                        return {
                            ...currEl, quantity: currEl.quantity - 1
                        }
                    }
                    return currEl
                }).filter((currEl) => currEl.quantity > 0)
            }
        default:
            break;
    }
}
export default reducer