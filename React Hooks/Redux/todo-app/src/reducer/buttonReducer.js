const intital = true;
const buttonReducer = (state = intital, action) => {
    switch (action.type) {
        case "ChangeButton":

            return !state

        default:
            return state
    }
}
export default buttonReducer;