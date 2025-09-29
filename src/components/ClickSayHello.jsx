import { useEffect, useState } from "react";
import { useUpdateTitle } from "../hooks/useUpdateDocTitle";

function ClickSayHello() {
	const [text, setText] = useState("blabla");
	const [isTrue, setIsTrue] = useState(true);

	useEffect(() => {
		if (isTrue) {
			setText("Bonjour");
		} else {
			setText("Bonsoir");
		}
	}, [isTrue]);

	useUpdateTitle(text);

	return <button onClick={() => setIsTrue(!isTrue)}>Cliquez</button>;
}

export default ClickSayHello;
