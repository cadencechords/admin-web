import { BASE_API } from "../utils/api";
import axios from "axios";

const AUTH_URL = `${BASE_API}/auth`;
export default class AuthApi {
	static login(email, password) {
		return axios.post(`${AUTH_URL}/sign_in`, { email, password });
	}
}
