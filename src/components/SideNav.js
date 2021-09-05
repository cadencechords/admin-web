import HomeIcon from "@heroicons/react/outline/HomeIcon";
import SideNavLink from "./SideNavLink";
import UserCircleIcon from "@heroicons/react/outline/UserCircleIcon";
import UserGroupIcon from "@heroicons/react/outline/UserGroupIcon";
import logoSrc from "../images/logo.png";

export default function SideNav() {
	return (
		<div className="hidden md:flex items-center flex-col fixed top-0 left-0 w-60 h-screen shadow-lg  p-4 bg-white z-20">
			<div className="flex justify-start w-full mb-4">
				<img src={logoSrc} width="60" alt="Logo" />
			</div>
			<SideNavLink to="/" className="mb-1" exact>
				<HomeIcon className="mr-2 w-5 h-5" /> Home
			</SideNavLink>
			<SideNavLink to="/users" className="mb-1">
				<UserCircleIcon className="mr-2 w-5 h-5" />
				Users
			</SideNavLink>
			<SideNavLink to="/teams">
				<UserGroupIcon className="mr-2 w-5 h-5" />
				Teams
			</SideNavLink>
		</div>
	);
}
