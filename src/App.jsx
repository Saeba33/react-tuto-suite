import "./App.css";
import Counter from "./components/Counter";
import { useProgressBar } from "./hooks/useCounter";

const App = () => {
	const greenProgressBar = useProgressBar(0, "bg-green-500", 25);
	const redProgressBar = useProgressBar(0, "bg-red-500", 20);

	return (
		<div className="flex flex-col items-center justify-center h-screen mx-5">
			<h1 className="mb-12">Hook useCallback & useReducer</h1>
			<div className="w-full space-y-20">
				<Counter
					progressState={greenProgressBar.progressState}
					onIncrease={greenProgressBar.increaseProgress}
					onDecrease={greenProgressBar.decreaseProgress}
					onReset={greenProgressBar.resetProgress}
				/>
				<Counter
					progressState={redProgressBar.progressState}
					onIncrease={redProgressBar.increaseProgress}
					onDecrease={redProgressBar.decreaseProgress}
					onReset={redProgressBar.resetProgress}
				/>
			</div>
		</div>
	);
};

export default App;
