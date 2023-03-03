import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BranchItem {
	name: string;
	id: number;
}

export interface BranchState {
	branchList: BranchItem[] | null | undefined;
}

export const getBranches = createAsyncThunk(
	"branch/getBranches",
	async (token: string) => {
		const headers = {
			Authorization: `Bearer ${token}`,
		};
		const response = await fetch("https://hrsystem.eraasoft.com/api/branches", {
			method: "GET",
			headers: headers,
		});

		const { data, message, status } = await response.json();
		if (status >= 400) {
			console.log(message);
		}
		return data;
	}
);

const initialState: BranchState = {
	branchList: [],
};

export const branchSlice = createSlice({
	name: "branch",
	initialState,
	reducers: {
		getAllBranches: (state, action: PayloadAction<BranchItem[]>) => {
			console.log(action.payload);
			state.branchList = action.payload;

			// state.branchList = action.payload.data;
		},
		// removeBranch: (state, action: PayloadAction<{ name: string }>) => {
		// 	const newState = state.branchList?.filter((item) => {
		// 		return item.name !== action.payload.name;
		// 	});
		// 	state.branchList = newState;
		// },
		// updateBranch: (
		// 	state,
		// 	action: PayloadAction<{ id: string; name: string; location: string }>
		// ) => {
		// 	state.branchList?.map((item) => {
		// 		if (item.name == action.payload.id) {
		// 			item.name = action.payload.name;
		// 			// item.location = action.payload.location;
		// 		}
		// 	});
		// },
	},
	extraReducers: (builder) => {
		builder.addCase(getBranches.fulfilled, (state, action) => {
			state.branchList = action.payload;
		});
	},
});

export const { getAllBranches } = branchSlice.actions;

export default branchSlice.reducer;
