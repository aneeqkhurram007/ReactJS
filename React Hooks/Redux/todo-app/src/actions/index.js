export const addTodo = (data) => {
    return {
        type: "Add",
        payload: {
            id: Date.now(),
            data
        }
    }
}
export const changeButton = () => {
    return {
        type: "ChangeButton"
    }
}
export const delTodo = (id) => {
    return {
        type: "Delete",
        id
    }
}
export const editTodo = (id, data) => {
    return {
        type: "Edit",
        payload: {
            id, data
        }
    }
}
export const clearAll = () => {
    return {
        type: "ClearAll"
    }
}