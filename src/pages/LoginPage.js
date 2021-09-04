import AuthApi from "../api/authApi";
import Button from "../components/Button";
import FormField from "../components/FormField";
import Title from "../components/Title";
import { setAuth } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const router = useHistory();

	const handleLogin = async () => {
		try {
			setLoading(true);
			let { headers } = await AuthApi.login(email, password);
			let auth = { uid: headers.uid, accessToken: headers["access-token"], client: headers.client };
			dispatch(setAuth(auth));
			router.push("/");
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const isValid = () => {
		return email !== "" && password !== "";
	};

	const handleEnterPressed = () => {
		if (isValid()) {
			handleLogin();
		}
	};

	return (
		<div className="h-screen w-full max-w-lg p-2 mx-auto flex-center flex-col">
			<Title className="mb-8">Login</Title>
			<FormField
				label="Email"
				type="email"
				className="mb-4"
				value={email}
				onChange={setEmail}
				onEnter={handleEnterPressed}
			/>
			<FormField
				label="Password"
				type="password"
				className="mb-6"
				value={password}
				onChange={setPassword}
				onEnter={handleEnterPressed}
			/>
			<Button fullWidth disabled={!isValid()} onClick={handleLogin} loading={loading}>
				Log in
			</Button>
		</div>
	);
}
