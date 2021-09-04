import Button from "./Button";
import { signOut } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function TopNav() {
	const dispatch = useDispatch();
	const router = useHistory();

	const handleSignOut = () => {
		dispatch(signOut);
		router.push("/login");
	};

	return (
		<nav className="fixed top-0 w-full pl-64 h-12 px-4 bg-white z-10 shadow-sm hidden md:flex justify-end items-center">
			<Button className="text-red-700" variant="text" onClick={handleSignOut}>
				Sign out
			</Button>
		</nav>
	);
}
