import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
	token: string;
	user: {
		id: number | null;
		name: string;
		email: string;
		email_verified_at: string;
		address: string;
		image: string;
		phone: string;
		rate: string;
		role: string;
		salary: string;
	};
}

const initialState: UserState = {
	token: "",
	user: {
		id: null,
		name: "",
		email: "",
		email_verified_at: "",
		address: "",
		image: "",
		phone: "",
		rate: "",
		role: "",
		salary: "",
	},
};

export const branchSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setActiveUser(state, action: PayloadAction<UserState>) {
			state.token = action.payload.token;
			state.user = action.payload.user;
		},
		removeActiveUser(state) {
			state.token = "";
			state.user.address = "";
			state.user.email = "";
			state.user.email_verified_at = "";
			state.user.id = null;
			state.user.image = "";
			state.user.name = "";
			state.user.phone = "";
			state.user.rate = "";
			state.user.role = "";
			state.user.salary = "";
		},
	},
});

export const { setActiveUser, removeActiveUser } = branchSlice.actions;

export default branchSlice.reducer;
