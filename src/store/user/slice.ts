import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInitialState } from "./initialState";

export const userSlice = createSlice({
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
