import BottomNavLink from "./BottomNavLink";
import HomeIcon from "@heroicons/react/outline/HomeIcon";
import UserCircleIcon from "@heroicons/react/outline/UserCircleIcon";
import UserGroupIcon from "@heroicons/react/outline/UserGroupIcon";

export default function BottomNav() {
	return (
		<nav className="fixed bottom-0 left-0 w-full md:hidden bg-white flex border-t">
			<BottomNavLink to="/users">
				<UserCircleIcon className="w-6 h-6" />
			</BottomNavLink>
			<BottomNavLink to="/" exact>
				<HomeIcon className="w-6 h-6" />
			</BottomNavLink>
			<BottomNavLink to="/teams">
				<UserGroupIcon className="w-6 h-6" />
			</BottomNavLink>
		</nav>
	);
}
