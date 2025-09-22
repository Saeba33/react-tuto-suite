import { useState } from "react";

const AddTodoForm = ({ addNewTodo }) => {
	const [addTodo, setAddTodo] = useState("");

	const handleTodo = (e) => {
		e.preventDefault();
		addNewTodo(addTodo);
		setAddTodo("");
	};

	return (
		<form onSubmit={handleTodo}>
			<div className="flex flex-col w-full mx-auto gap-2">
				<label className="mt-10 flex items-start">Ajouter Todo</label>

				<div className="flex items-center gap-2">
					<input
						className="border-2 py-1 px-2 rounded"
						type="text"
						value={addTodo}
						onChange={(e) => setAddTodo(e.target.value)}
					/>
					<input
						className="border-2 py-1 px-2 rounded cursor-pointer"
						type="submit"
					/>
				</div>
			</div>
		</form>
	);
};

export default AddTodoForm;
