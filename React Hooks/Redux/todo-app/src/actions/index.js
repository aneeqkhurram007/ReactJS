export const addTodo = (data) => {
    return {
        type: "Add",
        payload: {
            id: Date.now(),
            data
        }
    }
}
export const delTodo = (id) => {
    return {
        type: "Delete",
        id
    }
}
export const clearAll = () => {
    return {
        type: "ClearAll"
    }
}