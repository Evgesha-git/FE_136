import React, { useEffect } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { useAction, useAppSelector } from "./hooks/redux";
import HomePage from "./components/HomePage";
import { TTodo } from "./store/reducers/toDoSlice";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Header/>,
		errorElement: <h2>Ooooops</h2>,
		children: [
			{
				path: '/',
				element: <HomePage/>
			}
		]
	},
]);

function App() {
	const { user } = useAppSelector((state) => state.user);
	const {setTodo} = useAction();

	useEffect(() => {
		if (user){
			const todo: TTodo = {
				id: Date.now(),
				content: 'test',
				isActive: true,
				isComplite: false,
				timeToEnd: (new Date()).toUTCString(),
			};
			// setTodo(user.uid, todo)
		}
	});

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;

// {
//   uid
//   userName
//   todos: [
//     {
//       content
//       isComplite
//       id
//       timeToEnd
//       isActive
//     }
//   ]
// }