import { Route, Switch, useHistory } from "react-router-dom";

import BottomNav from "./BottomNav";
import HomePage from "../pages/HomePage";
import SideNav from "./SideNav";
import TeamDetailPage from "../pages/TeamDetailPage";
import TeamsIndexPage from "../pages/TeamsIndexPage";
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
				<BottomNav />
				<div className="md:ml-60 mt-4 md:mt-16 px-2 md:px-8 mb-20 md:mb-0 transition-all">
					<div className="max-w-3xl mx-auto">
						<Switch>
							<Route path="/teams/:id" exact>
								<TeamDetailPage />
							</Route>
							<Route path="/teams" exact>
								<TeamsIndexPage />
							</Route>
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
