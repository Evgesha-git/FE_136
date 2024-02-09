import { userActions } from "../redusers/userReducer";

export const addUserAction = (payload) => {
    return (dispatch) => {
        dispatch({type: userActions.ADD_USER, payload})
    }
}

export const removeUserAction = (payload) => {
    return (dispatch) => {
        dispatch({type: userActions.REMOVE_USER, payload});
    }
}

export const addAsyncUsers = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({type: userActions.FETCHING_USERS});
            const resp = await fetch('https://fakestoreapi.com/users');
            const users = await resp.json();
            dispatch({type: userActions.ADD_USER, payload: users})
        } catch (error) {
            dispatch({type: userActions.ERROR_USER, payload: error.message});
        }
    }
}