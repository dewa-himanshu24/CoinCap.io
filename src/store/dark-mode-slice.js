import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    darkModeStatus: false,
  },
  reducers: {
    toggleDarkModeStatus(state) {
      state.darkModeStatus = !state.darkModeStatus;
    },
  },
});

export const darkModeActions = darkModeSlice.actions;

export default darkModeSlice;