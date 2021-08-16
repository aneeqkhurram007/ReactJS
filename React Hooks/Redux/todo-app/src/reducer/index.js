import todoReducers from "./reducers";
import buttonReducer from "./buttonReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    todoReducers, buttonReducer
})
export default rootReducer;