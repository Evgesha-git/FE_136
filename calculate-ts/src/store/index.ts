import { combineReducers, configureStore } from "@reduxjs/toolkit";
import calculateReducer from "./reducers/calculateReducer";

const rootReducer = combineReducers({
    calc: calculateReducer,
});

export const setupStore = () => configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];