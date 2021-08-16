const getLocalItems = () => {
    let lists = localStorage.getItem('lists');
    return lists ? JSON.parse(lists) : [];
}
const initial = { list: getLocalItems() }
const todoReducers = (state = initial, action) => {
    switch (action.type) {
        case "Add":
            const { id, data } = action.payload;
            if (data.length > 2) {
                return {
                    ...state,
                    list:
                        [
                            ...state.list,
                            {
                                id, data
                            }

                        ]
                }
            }
            else {
                return state;
            }
        case "Delete":
            const newList = { ...state, list: state.list.filter((elem) => elem.id !== action.id) }
            return newList
        case "Edit":

            const editedList = {
                ...state, list: state.list.map((elem) => {
                    if (elem.id === action.payload.id && action.payload.data.length > 2) {
                        elem.data = action.payload.data;
                    }
                    return elem;
                })
            }
            return editedList;
        case "ClearAll":
            return { ...state, list: [] }
        default:
            return state;
    }
}
export default todoReducers;