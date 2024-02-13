import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitState = {
	operandA: number;
	operandB: number;
	operation: string;
	resul: number;
};

const initState: TInitState = {
	operandA: 0,
	operandB: 0,
	operation: "",
	resul: 0,
};

export const CalculateSlice = createSlice({
	name: "calc",
	initialState: initState,
	reducers: {
		setOperandA(state, action: PayloadAction<number>) {
			state.operandA = action.payload;
		},
		setOperandB(state, action: PayloadAction<number>) {
			state.operandB = action.payload;
		},
		setOperation(state, action: PayloadAction<string>) {
			state.operation = action.payload;
		},
		getresult(state) {
			switch (state.operation) {
				case "+":
					state.resul = state.operandA + state.operandB;
					break;
				case "-":
					state.resul = state.operandA - state.operandB;
					break;
				case "*":
					state.resul = state.operandA * state.operandB;
					break;
				case "/":
					state.resul = state.operandA / state.operandB;
					break;
				case "**":
					state.resul = state.operandA ** state.operandB;
					break;
				default:
					break;
			}
		},
	},
});

export default CalculateSlice.reducer;