import store from "../store/store";

export const BASE_API = process.env.REACT_APP_API_URL;

export function constructAuthHeaders() {
	let headers = {
		"access-token": store.getState()?.auth?.accessToken,
		client: store.getState()?.auth?.client,
		uid: store.getState()?.auth?.uid,
	};

	return headers;
}
