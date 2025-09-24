import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
	switch (action) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		case "reset":
			return 0;
		default:
			return state;
	}
};

const Count = () => {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="flex flex-col items-center">
			<h2 className="text-2xl">
				Compteur : <span className="font-bold">{count}</span>
			</h2>
			<div className="flex gap-2 items-center mt-4">
				<button onClick={() => dispatch("increment")}>+</button>
				<button onClick={() => dispatch("decrement")}>-</button>
				<button onClick={() => dispatch("reset")}>Reset</button>
			</div>
		</div>
	);
};

export default Count;
