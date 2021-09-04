import { NavLink } from "react-router-dom";

export default function SideNavLink({ children, className, to, exact }) {
	return (
		<div className="text-gray-500 w-full">
			<NavLink
				to={to}
				exact={exact}
				activeClassName="bg-gray-100 text-black"
				className={`flex items-center rounded-md hover:bg-gray-100 transition-colors w-full p-2 cursor-pointer font-semibold ${className}`}
			>
				{children}
			</NavLink>
		</div>
	);
}

SideNavLink.defaultProps = {
	className: "",
	exact: false,
};
