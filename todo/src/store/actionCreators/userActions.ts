import { AppDispatch } from "..";
import { userSlice } from "../reducers/userSlice";
import { auth } from "../../utils/configdb";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export const userAuth = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching());
        const provider = new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider);
        dispatch(userSlice.actions.userFetchingSuccess(user));
    } catch (error: any) {
        dispatch(userSlice.actions.userFetchingError(error.message));
    }
}

export const logOutUser = () => (dispatch: AppDispatch) => {
    signOut(auth);
    dispatch(userSlice.actions.userFetchingSuccess(null));
}