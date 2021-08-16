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
        case "Edit":

            const editedList = state.map((elem) => {
                if (elem.id === action.payload.id) {
                    elem.data = action.payload.data;
                }
                return elem;
            })
            return editedList;
        case "ClearAll":
            return []
        default:
            return state;
    }
}
export default todoReducers;