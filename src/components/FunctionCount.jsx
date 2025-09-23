import { useEffect, useState } from "react";

function FunctionCount() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	useEffect(() => {
		setTimeout(() => {
			document.title = `Vous avez cliqué ${count} fois`;
		});
	},[count]);

	return (
		<div>
			<h1>{count}</h1>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button className="mt-3" onClick={() => setCount(count + 1)}>
				+ 1
			</button>
		</div>
	);
}

export default FunctionCount;
