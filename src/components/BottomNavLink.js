import { NavLink } from "react-router-dom";

export default function BottomNavLink({ children, className, to, exact }) {
	return (
		<div className="text-gray-500 w-full">
			<NavLink
				to={to}
				exact={exact}
				activeClassName="text-green-500 text-black"
				className={`flex-center rounded-md hover:text-green-500 transition-colors w-full py-3 cursor-pointer font-semibold ${className}`}
			>
				{children}
			</NavLink>
		</div>
	);
}

BottomNavLink.defaultProps = {
	className: "",
	exact: false,
};
