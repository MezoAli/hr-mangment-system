import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import build from "next/dist/build";

export interface DepartmentItem {
	name: string;
	id: number;
}

export interface DepartmentState {
	departmentList: DepartmentItem[] | null | undefined;
	loading: boolean;
}

const initialState: DepartmentState = {
	departmentList: [],
	loading: false,
};

export const getDepartments = createAsyncThunk(
	"department/getDepartments",
	async (token: string) => {
		const headers = {
			Authorization: `Bearer ${token}`,
		};
		const response = await fetch(
			"https://hrsystem.eraasoft.com/api/departments",
			{
				method: "GET",
				headers: headers,
			}
		);

		const { data, message, status } = await response.json();
		if (status >= 400) {
			console.log(message);
		}
		return data;
	}
);

export const departmentSlice = createSlice({
	name: "department",
	initialState,
	reducers: {
		// getAllBranches: (state, action: PayloadAction<DepartmentItem[]>) => {
		// 	console.log(action.payload);
		// 	state.departmentList = action.payload;
		// 	// state.branchList = action.payload.data;
		// },
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
		builder.addCase(getDepartments.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getDepartments.fulfilled, (state, action) => {
			state.departmentList = action.payload;
			state.loading = false;
		});
	},
});

// export const { getA } = departmentSlice;

export default departmentSlice.reducer;
