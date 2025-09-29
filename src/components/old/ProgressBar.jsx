import React from "react";

const ProgressBar = ({ percentage, barColor }) => {
	const progressStyle = { width: `${percentage}%` };

	return (
		<div className="w-full">
			<p className="text-2xl font-bold mb-2">
				Pourcentage de progression : {percentage} %
			</p>
			<div className="w-full h-6 bg-gray-200 rounded overflow-hidden">
				<div
					className={`
						h-full ${barColor}
						bg-[length:20px_20px]
						[background-image:linear-gradient(45deg,rgba(255,255,255,0.3)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0.3)_75%,transparent_75%,transparent)]
											`}
					style={progressStyle}
				></div>
			</div>
		</div>
	);
};

export default React.memo(ProgressBar);
