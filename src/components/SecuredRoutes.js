import { Route, Switch, useHistory } from "react-router-dom";

import HomePage from "../pages/HomePage";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import UserDetailPage from "../pages/UserDetailPage";
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
				<div className="ml-60 mt-16 px-8">
					<div className="max-w-2xl mx-auto">
						<Switch>
							<Route path="/users/:id" exact>
								<UserDetailPage />
							</Route>
							<Route path="/users" exact>
								<UsersIndexPage />
							</Route>
							<Route path="/" exact>
								<HomePage />
							</Route>
						</Switch>
					</div>
				</div>
			</>
		);
	}
}
