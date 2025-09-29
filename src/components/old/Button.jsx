import React from "react";

const Button = ({ buttonColor, onClick, actionValue, children }) => {
	return (
		<button
			onClick={() => onClick(actionValue)}
			className={`px-4 py-2 rounded font-semibold text-white ${buttonColor}`}
		>
			{children}
		</button>
	);
};

export default React.memo(Button);
