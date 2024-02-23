import React, { FC, useEffect, useState } from "react";
import { useAction, useAppSelector } from "../../hooks/redux";
import { TTodo } from "../../store/reducers/toDoSlice";
import ToDoItem from "./ToDoItem";
import Modal from "./Modal";

const ToDo: FC = () => {
	const { user } = useAppSelector((state) => state.user);
	const { todosUser, isLoading, error } = useAppSelector(
		(state) => state.todo
	);
	const { getToDoUsr, setTodo } = useAction();
    const [toggle, setToggle] = useState<boolean>(false);

    const close = () => {
        setToggle(!toggle);
    }

	useEffect(() => {
		if (user) {
			getToDoUsr(user);
		}
	}, [user]);

	return (
		<section className="todo">
			<div className="container">
				{isLoading && <span>Loading...</span>}
				{todosUser && (
					<h2 className="title">
						Список задач: {todosUser.userName}
					</h2>
				)}
                <button onClick={close}>Добавить новую задачу</button>
				{todosUser?.todos.length === 0 ? (
					<p>Задач нет</p>
				) : (
					todosUser?.todos.map((item: TTodo) => <ToDoItem key={item.id} todoitem={item}/>)
				)}
                {toggle && user && <Modal uid={user.uid} close={close}/>}
			</div>
		</section>
	);
};

export default ToDo;
