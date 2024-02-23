import React, { FC, useEffect, useRef, useState } from "react";
import { TTodo } from "../../store/reducers/toDoSlice";
import { useAction, useAppSelector } from "../../hooks/redux";

type TProps = {
	className?: string;
	todoitem: TTodo;
};

const ToDoItem: FC<TProps> = (props) => {
	const { className, todoitem } = props;
	const { user } = useAppSelector((state) => state.user);
	const { editTodo, removeTodo } = useAction();
	const [time, setTime] = useState<string>("");
    const timerId = useRef<any>();

    const timer = () => {
        const currentTime = Date.now();
        const timeEnd = new Date(todoitem.timeToEnd).getTime();
        const timeToEnd = timeEnd - currentTime;
        if (timeToEnd <= 0) {
            const todo: TTodo = {
                ...todoitem,
                isActive: false
            };
            if (user) editTodo(user.uid, todo);
            return;
        }
        let d = Math.floor(timeToEnd / 1000);
        const s = d % 60; 
        d = Math.floor(d / 60);
        const min = d % 60;
        d = Math.floor(d / 60);
        const h = d % 24; 
        d = Math.floor(d / 24);

        setTime(`${d} - дней, ${h}:${min < 10 ? `0${min}` : min}:${s < 10 ? `0${s}` : s}`);
        timerId.current = setTimeout(() => timer(), 1000);
    }

    const setComplite = () => {
        const todo: TTodo = {
            ...todoitem,
            isComplite: !todoitem.isComplite
        };        
        if (user) editTodo(user.uid, todo);
    }

    useEffect(() => {
        timer();
        return () => clearTimeout(timerId.current);
    }, []);

	return (
		<div className="item" style={{background: todoitem.isActive ? 'green' : 'red'}}>
			<input type="checkbox" onClick={setComplite} checked={todoitem.isComplite} />
			<p>{todoitem.content}</p>
			<span>{time}</span>
			{user && (
				<button onClick={() => removeTodo(user.uid, todoitem)}>
					Remove
				</button>
			)}
			<button>Edit</button>
		</div>
	);
};

export default ToDoItem;
