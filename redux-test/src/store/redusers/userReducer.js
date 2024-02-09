const initialState = {
	users: [],
	loading: false,
	error: null,
};

export const userActions = {
	ADD_USER: "ADD_USER",
	REMOVE_USER: "REMOVE_USER",
	FETCHING_USERS: "FETCHING_USERS",
	ERROR_USER: "ERROR_USER",
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case userActions.FETCHING_USERS:
			return { loading: true, error: null, users: state.users };
		case userActions.ADD_USER:
			return {
				loading: false,
				error: null,
				users: [...state.users, ...action.payload],
			};
		case userActions.ERROR_USER:
			return {
				loading: false,
				error: action.payload,
				users: [],
			};
		case userActions.REMOVE_USER:
			return {
				loading: false,
				error: null,
				users: state.users.filter((user) => user.id !== action.payload),
			};
		default:
			return state;
	}
};
