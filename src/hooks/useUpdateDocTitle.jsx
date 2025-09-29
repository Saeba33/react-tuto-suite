import { useEffect } from "react";

export const useUpdateTitle = (arg) => {
	useEffect(() => {
		document.title = `Titre : ${arg}`;
	}, [arg]);
};
