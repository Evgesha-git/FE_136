import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { calculateSlice } from "./store/reducers/calculateReducer";

function App() {
	const { result, operandA, operandB, operation } = useSelector(
		(state) => state.calc
	);
	const dispatch = useDispatch();

  const getres = () => {
    dispatch(calculateSlice.actions.getResult());
  }

	return (
		<div className="App">
			<input
				type="text"
				onChange={(e) =>
					dispatch(calculateSlice.actions.setOperandA(+e.target.value))
				}
				value={operandA}
			/>
			<input
				type="text"
				onChange={(e) =>
					dispatch(calculateSlice.actions.setOperandB(+e.target.value))
				}
				value={operandB}
			/>
			<input
				type="text"
				onChange={(e) =>
					dispatch(
						calculateSlice.actions.setOperation(e.target.value)
					)
				}
				value={operation}
			/>
			<button onClick={getres}>
				Посчитать
			</button>
			<p>{result}</p>
		</div>
	);
}

export default App;
