import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import SecuredRoutes from "./SecuredRoutes";

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/login" exact>
					<LoginPage />
				</Route>
				<SecuredRoutes />
			</Switch>
		</Router>
	);
}
