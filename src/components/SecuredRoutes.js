import { Route, Switch, useHistory } from "react-router-dom";

import HomePage from "../pages/HomePage";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import UsersIndexPage from "../pages/UsersIndexPage";
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
				<div className="ml-72 mt-16">
					<Switch>
						<Route path="/users" exact>
							<UsersIndexPage />
						</Route>
						<Route path="/" exact>
							<HomePage />
						</Route>
					</Switch>
				</div>
			</>
		);
	}
}
