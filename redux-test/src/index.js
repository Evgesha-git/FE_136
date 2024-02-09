import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// import { createStore } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
import { store } from "./store";

// action = {type: '', payload: newState}

// const initiaState = {
// 	cash: 5,
// };

// const cashReduser = (state = initiaState, action) => {
// 	switch (action.type) {
// 		case "ADD_CASH":
// 			return { ...state, cash: state.cash + action.payload };
// 		case "GET_CASH":
// 			return { ...state, cash: state.cash - action.payload };
// 		default:
// 			return state;
// 	}
// };

// const store = createStore(cashReduser, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
