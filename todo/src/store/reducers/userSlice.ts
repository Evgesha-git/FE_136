import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export type TUserState = {
    user: User | null,
    loading: boolean,
    error: string | null,
}

const initState: TUserState = {
    user: null,
    loading: false,
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        userFetching(state){
            state.loading = true;
        },
        userFetchingSuccess(state, action: PayloadAction<User | null>){
            state.user = action.payload;
            state.loading = false;
        },
        userFetchingError(state, action: PayloadAction<string>){
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export default userSlice.reducer;