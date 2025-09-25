import "./App.css";
// import Counter from "./components/Counter";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { useProgressBar } from "./hooks/useCounter";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useState } from "react";
import PrivateRoute from "./security/PrivateRoute";

const App = () => {
	// const greenProgressBar = useProgressBar(0, "bg-green-500", 25);
	// const redProgressBar = useProgressBar(0, "bg-red-500", 20);
    const [isAdmin, setIsAdmin] = useState(false);

	return (
		<div className="flex flex-col items-center justify-center h-screen mx-5">
			{/* <div>
				<h1 className="mb-12">Hook useCallback & useReducer</h1>
				<div className="w-full space-y-20">
					<Counter
						progressState={greenProgressBar.progressState}
						onIncrease={greenProgressBar.increaseProgress}
						onDecrease={greenProgressBar.decreaseProgress}
						onReset={greenProgressBar.resetProgress}
					/>
					<Counter
						progressState={redProgressBar.progressState}
						onIncrease={redProgressBar.increaseProgress}
						onDecrease={redProgressBar.decreaseProgress}
						onReset={redProgressBar.resetProgress}
					/>
				</div>
			</div> */}
			<div>
				<h1>Exercice React Router DOM</h1>
				<Router>
					<nav className="flex items-center justify-center gap-2">
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/profile">Profile</Link>
					</nav>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route
							path="/profile"
							element={
								<PrivateRoute isAdmin={isAdmin}>
									<Profile />
								</PrivateRoute>
							}
						/>
					</Routes>
				</Router>
			</div>
		</div>
	);
};

export default App;
