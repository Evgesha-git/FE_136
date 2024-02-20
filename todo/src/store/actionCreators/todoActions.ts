import { AppDispatch } from "..";
import { TToDos, TTodo, toDoSlice } from "../reducers/toDoSlice";
import { db } from "../../utils/configdb";
import {child, get, ref, set, update} from 'firebase/database';
import { User } from "firebase/auth";


export const getToDoUsr = (user: User) => async (dispatch: AppDispatch) => {
    try {
        dispatch(toDoSlice.actions.setLoading());
        const resp = await get(child(ref(db), `todoUsers/${user.uid}`));
        // console.log(resp.exists());

        if(resp.exists()){            
            dispatch(toDoSlice.actions.setToDoUser(resp.val()));
        } else {
            const data: TToDos = {
                uid: user.uid,
                userName: user.displayName ? user.displayName : 'anonimus',
                todos: [],
            }   
            await set(ref(db, `todoUsers/${user.uid}`), data);
            dispatch(toDoSlice.actions.setToDoUser(data));
        }
    } catch (error: any) {
        dispatch(toDoSlice.actions.setError(error.message));
    }
}

export const setTodo = (uid: string, todo: TTodo) => async (dispatch: AppDispatch) => {
    try {
        dispatch(toDoSlice.actions.setLoading());
        const resp = await get(child(ref(db), `todoUsers/${uid}`));
        if(resp.exists()){
            const oldData: TToDos = resp.val();
            if (!oldData.todos){
                oldData.todos = [];
            }
            oldData.todos = [...oldData.todos, todo];
            await update(ref(db, `todoUsers/${uid}`), oldData);
            dispatch(toDoSlice.actions.setToDoUser(oldData));
        } else {
            throw new Error('Не удалось получить данные');
        }
    } catch (error: any) {
        dispatch(toDoSlice.actions.setError(error.message));
    }
}

export const editTodo = (uid: string, todo: TTodo) => async (dispatch: AppDispatch) => {
    try {
        dispatch(toDoSlice.actions.setLoading());
        const resp = await get(child(ref(db), `todoUsers/${uid}`));
        if(resp.exists()){
            const oldData: TToDos = resp.val();

            oldData.todos = oldData.todos.map((d: TTodo) => {
                if (d.id === todo.id){
                    return todo
                } else {
                    return d
                }
            });
            await update(ref(db, `todoUsers/${uid}`), oldData);
            dispatch(toDoSlice.actions.setToDoUser(oldData));
        } else {
            throw new Error('Не удалось получить данные');
        }
    } catch (error: any) {
        dispatch(toDoSlice.actions.setError(error.message));
    }
}

export const removeTodo = (uid: string, todo: TTodo) => async (dispatch: AppDispatch) => {
    try {
        dispatch(toDoSlice.actions.setLoading());
        const resp = await get(child(ref(db), `todoUsers/${uid}`));
        if(resp.exists()){
            const oldData: TToDos = resp.val();

            oldData.todos = oldData.todos.filter((d: TTodo) => d.id !== todo.id);
            await update(ref(db, `todoUsers/${uid}`), oldData);
            dispatch(toDoSlice.actions.setToDoUser(oldData));
        } else {
            throw new Error('Не удалось получить данные');
        }
    } catch (error: any) {
        dispatch(toDoSlice.actions.setError(error.message));
    }
}

export const clearTodo = () => (dispatch: AppDispatch) => {
    dispatch(toDoSlice.actions.setToDoUser(null));
}