import { BASE_API, constructAuthHeaders } from "../utils/api";

import axios from "axios";

const TEAMS_URL = `${BASE_API}/admin/teams`;

export default class TeamsApi {
	static getAll() {
		return axios.get(TEAMS_URL, { headers: constructAuthHeaders() });
	}

	static getOne(id) {
		return axios.get(`${TEAMS_URL}/${id}`, { headers: constructAuthHeaders() });
	}

	static getMembers(teamId) {
		return axios.get(`${TEAMS_URL}/${teamId}/memberships`, { headers: constructAuthHeaders() });
	}

	static getSongs(teamId) {
		return axios.get(`${TEAMS_URL}/${teamId}/songs`, { headers: constructAuthHeaders() });
	}

	static getBinders(teamId) {
		return axios.get(`${TEAMS_URL}/${teamId}/binders`, { headers: constructAuthHeaders() });
	}
}
