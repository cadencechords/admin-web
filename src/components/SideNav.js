import FolderOpenIcon from "@heroicons/react/outline/FolderOpenIcon";
import HomeIcon from "@heroicons/react/outline/HomeIcon";
import MusicNoteIcon from "@heroicons/react/solid/MusicNoteIcon";
import SideNavLink from "./SideNavLink";
import UserCircleIcon from "@heroicons/react/outline/UserCircleIcon";
import UserGroupIcon from "@heroicons/react/outline/UserGroupIcon";
import ViewGridAddIcon from "@heroicons/react/outline/ViewGridAddIcon";
import logoSrc from "../images/logo.png";

export default function SideNav() {
	return (
		<div className="hidden md:flex items-center flex-col fixed top-0 left-0 w-60 h-screen shadow-lg  p-4 bg-white z-20">
			<div className="flex justify-start w-full mb-4">
				<img src={logoSrc} width="60" height="60" alt="Logo" />
			</div>
			<SideNavLink to="/" className="mb-1" exact>
				<HomeIcon className="mr-3 w-5 h-5" /> Home
			</SideNavLink>
			<SideNavLink to="/users" className="mb-1">
				<UserCircleIcon className="mr-3 w-5 h-5" />
				Users
			</SideNavLink>
			<SideNavLink to="/teams" className="mb-1">
				<UserGroupIcon className="mr-3 w-5 h-5" />
				Teams
			</SideNavLink>
			<SideNavLink to="/binders" className="mb-1">
				<FolderOpenIcon className="mr-3 w-5 h-5" />
				Binders
			</SideNavLink>
			<SideNavLink to="/songs" className="mb-1">
				<MusicNoteIcon className="mr-3 w-5 h-5" />
				Songs
			</SideNavLink>
			<SideNavLink to="/setlists">
				<ViewGridAddIcon className="mr-3 w-5 h-5" />
				Sets
			</SideNavLink>
		</div>
	);
}
