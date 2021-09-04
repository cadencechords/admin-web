import { BASE_API, constructAuthHeaders } from "../utils/api";

import axios from "axios";

const USERS_URL = `${BASE_API}/admin/users`;

export default class UsersApi {
	static getAll() {
		return axios.get(USERS_URL, { headers: constructAuthHeaders() });
	}

	static getOne(id) {
		return axios.get(`${USERS_URL}/${id}`, { headers: constructAuthHeaders() });
	}

	static getMemberships(userId) {
		return axios.get(`${USERS_URL}/${userId}/memberships`, { headers: constructAuthHeaders() });
	}
}
