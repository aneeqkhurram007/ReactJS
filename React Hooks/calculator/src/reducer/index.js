import changeTheNumber, { mulDivNum } from "./upDown";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    changeTheNumber, mulDivNum
});
export default rootReducer;