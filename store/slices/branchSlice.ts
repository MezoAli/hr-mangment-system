import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../store";

export interface BranchItem {
	name: string;
	location: string;
}

interface BranchState {
	branchList: BranchItem[] | null | undefined;
}

const initialState: BranchState = {
	branchList: [],
};

export const branchSlice = createSlice({
	name: "Branch",
	initialState,
	reducers: {
		addBranch: (state, action: PayloadAction<BranchItem>) => {
			state.branchList?.push(action.payload);
		},
		removeBranch: (state, action: PayloadAction<{ name: string }>) => {
			const newState = state.branchList?.filter((item) => {
				return item.name !== action.payload.name;
			});
			state.branchList = newState;
		},
		updateBranch: (
			state,
			action: PayloadAction<{ id: string; name: string; location: string }>
		) => {
			state.branchList?.map((item) => {
				if (item.name == action.payload.id) {
					item.name = action.payload.name;
					item.location = action.payload.location;
				}
			});
		},
	},
});

export const { addBranch, removeBranch, updateBranch } = branchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default branchSlice.reducer;
