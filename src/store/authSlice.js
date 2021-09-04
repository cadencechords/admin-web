import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		email: "",
		accessToken: "",
		uid: "",
		client: "",
		isAuthenticated: false,
	},
	reducers: {
		setAuth: (state, action) => {
			state.email = action.payload.uid;
			state.accessToken = action.payload.accessToken;
			state.uid = action.payload.uid;
			state.client = action.payload.client;
			state.isAuthenticated = true;
		},
		signOut: (state) => {
			state.email = "";
			state.accessToken = "";
			state.client = "";
			state.uid = "";
			state.isAuthenticated = false;
		},
	},
});

export const { setAuth } = authSlice.actions;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
