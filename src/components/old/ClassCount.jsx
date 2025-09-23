import { Component } from "react";

export class ClassCount extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			name: "",
		};
	}

	componentDidMount() {
		document.title = `Vous avez cliqué ${this.state.count} fois`;
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.count !== prevState.count) {
			console.log("Mise à jour du titre");
			document.title = `Vous avez cliqué ${this.state.count} fois`;
		}
	}

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<input
					type="text"
					value={this.state.name}
					onChange={(e) => {
						this.setState({ name: e.target.value });
					}}
				/>
				<button
					className="mt-3"
					onClick={() => this.setState({ count: this.state.count + 1 })}
				>
					+ 1
				</button>
			</div>
		);
	}
}

export default ClassCount;
