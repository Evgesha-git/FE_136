import React from "react";
import style from "./App.module.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { CalculateSlice } from "./store/reducers/calculateReducer";

const App: React.FC = () => {
	const { operandA, operandB, operation, resul } = useAppSelector(
		(state) => state.calc
	);
	const dispatch = useAppDispatch();

	return (
		<div className="App">
			<input
				type="text"
				onChange={(e) =>
					dispatch(
						CalculateSlice.actions.setOperandA(+e.target.value)
					)
				}
				value={operandA}
			/>
			<input
				type="text"
				onChange={(e) =>
					dispatch(
						CalculateSlice.actions.setOperandB(+e.target.value)
					)
				}
				value={operandB}
			/>
			<input
				type="text"
				onChange={(e) =>
					dispatch(
						CalculateSlice.actions.setOperation(e.target.value)
					)
				}
				value={operation}
			/>
			<button
				onClick={() => dispatch(CalculateSlice.actions.getresult())}
			>
				Получить результат
			</button>
      <p>{resul}</p>
		</div>
	);
};

export default App;
