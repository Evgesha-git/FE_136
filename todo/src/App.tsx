import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { useAppSelector } from "./hooks/redux";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Header/>,
		errorElement: <h2>Ooooops</h2>,
	},
]);

function App() {
	const { user } = useAppSelector((state) => state.user);
	return (
		<div className="App">
			<RouterProvider router={router} />
      {JSON.stringify(user)}
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