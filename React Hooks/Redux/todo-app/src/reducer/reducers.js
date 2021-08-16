const getLocalItems = () => {
    let lists = localStorage.getItem('lists');
    return lists ? JSON.parse(lists) : [];
}
const initial = { list: getLocalItems() }
const todoReducers = (state = initial, action) => {
    switch (action.type) {
        case "Add":
            const { id, data } = action.payload;
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
        case "Delete":
            const newList = { ...state, list: state.filter((elem) => elem.id !== action.id) }
            return newList
        case "Edit":

            const editedList = {
                ...state, list: state.list.map((elem) => {
                    if (elem.id === action.payload.id) {
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