import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import bikeReducer from "./bikeReducer";

export default combineReducers({
    auth:authReducer,
    errors:errorReducer,
    bikes:bikeReducer
})