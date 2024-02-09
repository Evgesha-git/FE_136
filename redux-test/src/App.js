import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { useActions } from "./hooks/useActions";

function App() {
	const { cash } = useSelector((state) => state.cash);
	const { users, loading, error } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const { addUserAction, removeUserAction, addAsyncUsers } = useActions();

	const addCash = (cash) => {
		dispatch({ type: "ADD_CASH", payload: cash });
	};

	const getCash = (cash) => {
		dispatch({ type: "GET_CASH", payload: cash });
	};

	const addUser = (name) => {
		const user = {
			name: {
				firstname: name,
			},
			id: Date.now(),
		};
		addUserAction([user]);
	};

	const removeUser = (id) => {
		removeUser(id);
	};

	useEffect(() => {
		console.log(cash);
	});

	return (
		<div className="App">
			<div style={{ fontSize: 28 }}>{cash}</div>
			<button onClick={() => addCash(+prompt())}>Попольнить счёт</button>
			<button onClick={() => getCash(+prompt())}>Снять со счёта</button>
			<button onClick={() => addUser(prompt())}>
				Добавить пользователя
			</button>
			<button onClick={addAsyncUsers}>Добавить пользователей</button>
			{users.length > 0 ? (
				<div>
					{users.map((user) => (
						<div key={user.id} onClick={() => removeUser(user.id)}>
							{user.name.firstname}
						</div>
					))}
				</div>
			) : (
				<div>Пользователей нет</div>
			)}
		</div>
	);
}

export default App;
