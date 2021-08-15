const initial = []
const todoReducers = (state = initial, action) => {
    switch (action.type) {
        case "Add":
            const { id, data } = action.payload;
            return [
                ...state,
                {
                    id, data
                }
            ]
        case "Delete":
            const newList = state.filter((elem) => elem.id !== action.id)
            return newList

        case "ClearAll":
            return []
        default:
            return state;
    }
}
export default todoReducers;