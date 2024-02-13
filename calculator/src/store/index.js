import { combineReducers, configureStore } from "@reduxjs/toolkit";
import calculateReducer from "./reducers/calculateReducer";

const rootReducer = combineReducers({
    calc: calculateReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
};
