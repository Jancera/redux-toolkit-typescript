import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { userInitialState } from "./initialState";
import { IUser } from "./interfaces/IUser";

export const userSlice = createSlice<IUser, SliceCaseReducers<IUser>>({
  name: "user",
  initialState: userInitialState,
  reducers: {
    userSetName(state, action: PayloadAction<string>) {
      console.log(action);
      state.name = action.payload;
    },
    userSetAge(state, action: PayloadAction<string>) {
      state.age = action.payload;
    },
  },
});
