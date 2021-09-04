import { selectIsAuthenticated } from "../store/authSlice";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SecuredRoutes() {
	const isAuthenticated = useSelector(selectIsAuthenticated);
	const router = useHistory();

	if (!isAuthenticated) {
		router.push("/login");
	} else {
		return <></>;
	}
}
