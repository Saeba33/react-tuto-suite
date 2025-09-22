import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodoForm from "./AddTodoForm";

const Todo = () => {
	const [todos, setTodos] = useState([
		{ id: 1, label: "Acheter du lait" },
		{ id: 2, label: "Acheter du pain" },
		{ id: 3, label: "Acheter du fromage" },
	]);
	const [warning, setWarning] = useState(false);

	const addNewTodo = (newTodo) => {
		const newId = uuidv4();
		if (newTodo !== "") {
			warning && setWarning(false);

			setTodos([
				...todos,
				{
					id: newId,
					label: newTodo,
				},
			]);
		} else {
			setWarning(true);
		}
	};

	const myTodos = todos.map((todo) => {
		return <li key={todo.id}>{todo.label}</li>;
	});

	const warningMsg = warning && (
		<div className="text-red-500" role="alert">
			Veuillez indiquer un libellé
		</div>
	);
	return (
		<div>
			{warningMsg}
			<h1>To-Do : {todos.length}</h1>
			<ul>{myTodos}</ul>
			<AddTodoForm addNewTodo={addNewTodo} />
		</div>
	);
};

export default Todo;
