import { combineReducers } from "redux";
import { cashReduser } from "./cashreducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    cash: cashReduser,
    user: userReducer
});
