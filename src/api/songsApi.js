import { BASE_API, constructAuthHeaders } from "../utils/api";

import axios from "axios";

const SONGS_URL = `${BASE_API}/admin/songs`;

export default class SongsApi {
	static getAll() {
		return axios.get(SONGS_URL, { headers: constructAuthHeaders() });
	}
}
