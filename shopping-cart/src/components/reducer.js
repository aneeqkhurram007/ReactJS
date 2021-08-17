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
                    if (currEl.id === action.payload && currEl.quantity > -1) {
                        return {
                            ...currEl, quantity: currEl.quantity - 1
                        }
                    }
                    return currEl
                }).filter((currEl) => currEl.quantity >= 0)
            }
        case "TotalItem":

            // let { totalItem } = state.item.reduce((accum, currVal) => {

            //     accum.totalItem += currVal.quantity;
            //     return accum;

            // }, {
            //     totalItem: 0
            // })
            // return { ...state, totalItem };
            return {
                ...state,
                totalItem: state.item.reduce((accum, currVal) => {
                    accum += currVal.quantity
                    return accum
                },
                    state.item.length
                )
            }
        case "TotalAmount":
            return {
                ...state,
                totalAmount: state.item.reduce((accum, currVal) => {
                    let tot = currVal.price * currVal.quantity;
                    accum += tot
                    return accum
                }, 0)
            }
        default:
            break;
    }
}
export default reducer