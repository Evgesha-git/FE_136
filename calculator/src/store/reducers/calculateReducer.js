import { createSlice } from "@reduxjs/toolkit";

const initState = {
	operandA: null,
	operandB: null,
	operation: "",
	result: 0,
};

export const calculateSlice = createSlice({
	name: "calculator",
	initialState: initState,
	reducers: {
		setOperandA(state, action) {
			state.operandA = action.payload;
		},
		setOperandB(state, action) {
			state.operandB = action.payload;
		},
		setOperation(state, action) {
			state.operation = action.payload;
		},
		getResult(state, action) {
			switch (state.operation) {
				case "+":
					state.result = state.operandA + state.operandB;
					break;
				case "-":
					state.result = state.operandA - state.operandB;
					break;
				case "*":
					state.result = state.operandA * state.operandB;
					break;
				case "/":
					state.result = state.operandA / state.operandB;
					break;
				case "**":
					state.result = state.operandA ** state.operandB;
					break;
				default:
					break;
			}
		},
	},
});

export default calculateSlice.reducer;