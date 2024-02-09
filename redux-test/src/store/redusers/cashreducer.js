const initiaState = {
	cash: 5,
};

export const cashReduser = (state = initiaState, action) => {
	switch (action.type) {
		case "ADD_CASH":
			return { ...state, cash: state.cash + action.payload };
		case "GET_CASH":
			return { ...state, cash: state.cash - action.payload };
		default:
			return state;
	}
};