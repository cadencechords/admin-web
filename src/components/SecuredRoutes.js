import { Route, Switch, useHistory } from "react-router-dom";

import HomePage from "../pages/HomePage";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { selectIsAuthenticated } from "../store/authSlice";
import { useSelector } from "react-redux";

export default function SecuredRoutes() {
	const isAuthenticated = useSelector(selectIsAuthenticated);
	const router = useHistory();

	if (!isAuthenticated) {
		router.push("/login");
		return null;
	} else {
		return (
			<>
				<SideNav />
				<TopNav />
				<div className="ml-64 mt-14">
					<Switch>
						<Route path="/" exact>
							<HomePage />
						</Route>
					</Switch>
				</div>
			</>
		);
	}
}
