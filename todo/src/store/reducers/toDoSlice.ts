import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
    id: number,
    content: string,
    isComplite: boolean,
    timeToEnd: string,
    isActive: boolean,
}

// type TTest = {
//     [index: string]: {}
// }

// object[lang].

export type TToDos = {
    uid: string,
    userName: string,
    todos: TTodo[]
}

type TinitState = {
    todosUser: TToDos | null,
    isLoading: boolean,
    error: string | null
}

const initState: TinitState ={
    todosUser: null,
    isLoading: false,
    error: null,
}

export const toDoSlice = createSlice({
    name: 'todo',
    initialState: initState,
    reducers: {
        setError(state, action: PayloadAction<string>){
            state.error = action.payload;
            state.isLoading = false;
        },
        setLoading(state){
            state.isLoading = true;
        },
        setToDoUser(state, action: PayloadAction<TToDos | null>){
            state.isLoading = false;
            state.error = null;
            state.todosUser = action.payload;
        }
    }
});

export default toDoSlice.reducer;