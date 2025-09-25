import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAdmin, children }) => {
	if (!isAdmin) {
		return <Navigate to="/" replace />;
	}
	return children;
};

export default PrivateRoute;
