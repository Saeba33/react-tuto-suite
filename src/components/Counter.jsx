import React from "react";
import Button from "./Button";
import ProgressBar from "./ProgressBar";

const Counter = ({
	progressState,
	onIncrease,
	onDecrease,
	onReset,
}) => {
	return (
		<div className="flex flex-col items-center gap-4">
			<ProgressBar
				percentage={progressState.progressValue}
				barColor={progressState.barColor}
			/>
			<div className="flex gap-4">
				<Button
					buttonColor="bg-green-500"
					actionValue={progressState.stepSize}
					onClick={onIncrease}
				>
					+ {progressState.stepSize}%
				</Button>
				<Button buttonColor="bg-blue-500" actionValue={0} onClick={onReset}>
					Reset
				</Button>
				<Button
					buttonColor="bg-red-500"
					actionValue={progressState.stepSize}
					onClick={onDecrease}
				>
					- {progressState.stepSize}%
				</Button>
			</div>
		</div>
	);
};

export default React.memo(Counter);
