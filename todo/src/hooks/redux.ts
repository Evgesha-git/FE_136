import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { actions } from "../store/actionCreators";
import { bindActionCreators } from "@reduxjs/toolkit";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAction = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
