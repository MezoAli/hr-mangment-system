import { configureStore } from "@reduxjs/toolkit";
import branchReducer from "./slices/branchSlice";
import userReducer from "./slices/userSlice";
import departmentReducer from "./slices/departmentSlice";

export const store = configureStore({
	reducer: {
		branchs: branchReducer,
		user: userReducer,
		departments: departmentReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
