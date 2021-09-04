import { BASE_API, constructAuthHeaders } from "../utils/api";

import axios from "axios";

const TEAMS_URL = `${BASE_API}/admin/teams`;

export default class TeamsApi {
	static getAll() {
		return axios.get(TEAMS_URL, { headers: constructAuthHeaders() });
	}
}
