import HomeIcon from "@heroicons/react/outline/HomeIcon";
import SideNavLink from "./SideNavLink";
import UserCircleIcon from "@heroicons/react/outline/UserCircleIcon";

export default function SideNav() {
	return (
		<div className="fixed top-0 left-0 w-60 h-screen shadow-lg flex-center flex-col px-4 bg-white z-20">
			<SideNavLink to="/" className="mb-1" exact>
				<HomeIcon className="mr-2 w-5 h-5" /> Home
			</SideNavLink>
			<SideNavLink to="/users">
				<UserCircleIcon className="mr-2 w-5 h-5" />
				Users
			</SideNavLink>
		</div>
	);
}
