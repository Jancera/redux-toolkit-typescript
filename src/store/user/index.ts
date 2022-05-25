import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInitialState } from "./initialState";
import { IUser } from "./interfaces/IUser";

export const User = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    userSetName(state: IUser, action: PayloadAction<string>) {
      console.log(action);
      state.name = action.payload;
    },
    userSetAge(state: IUser, action: PayloadAction<string>) {
      state.age = action.payload;
    },
  },
});
