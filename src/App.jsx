import { Component } from "react";
import Profile from "./components/Profile";

class App extends Component {
	state = {
		user: {
			name: "Lisa",
			age: 8,
		},
	};
	render() {
		return <Profile />;
	}
}

export default App;
