const initial = {
    list: []
}
const todoReducers = (state = initial, action) => {
    switch (action.type) {
        case "Add":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id,
                        data
                    }
                ]

            }
        case "Delete":
            const newList = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                list: newList
            }

        case "ClearAll":
            return {
                ...state,
                list: []
            }
        default:
            return state;
    }
}
export default todoReducers;