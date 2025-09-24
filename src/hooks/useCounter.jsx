import { useCallback, useReducer } from "react";

const progressBarReducer = (state, action) => {
	switch (action.type) {
		case "INCREASE_PROGRESS":
			return state.progressValue < 100
				? { ...state, progressValue: state.progressValue + action.stepSize }
				: state;
		case "DECREASE_PROGRESS":
			return state.progressValue > 0
				? { ...state, progressValue: state.progressValue - action.stepSize }
				: state;
		case "RESET_PROGRESS":
			return { ...state, progressValue: 0 };
		default:
			return state;
	}
};

export const useProgressBar = (initialProgress, barColor, stepSize) => {
	const [progressState, dispatch] = useReducer(progressBarReducer, {
		progressValue: initialProgress,
		barColor,
		stepSize,
	});

	const increaseProgress = useCallback((step) => {
		dispatch({ type: "INCREASE_PROGRESS", stepSize: step });
	}, []);

	const decreaseProgress = useCallback((step) => {
		dispatch({ type: "DECREASE_PROGRESS", stepSize: step });
	}, []);

	const resetProgress = useCallback(() => {
		dispatch({ type: "RESET_PROGRESS" });
	}, []);

	return { progressState, increaseProgress, decreaseProgress, resetProgress };
};
