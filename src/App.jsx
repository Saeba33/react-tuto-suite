import "./App.css";
import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";
import Todo from "./components/Todo";

function App() {
	return (
		<div className="flex flex-col gap-8">
			<h1>useStateHooks</h1>
			<ClassState />
			<hr />
			<FunctionState />
			<hr />
      <Todo/>
		</div>
	);
}

export default App;
