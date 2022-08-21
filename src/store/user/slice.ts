import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInitialState } from "./initialState";

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {},
});
