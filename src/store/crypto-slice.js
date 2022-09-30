import { createSlice } from "@reduxjs/toolkit";

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    cryptoData: [],
  },
  reducers: {
    setCryptoData(state, action) {
      state.cryptoData = action.payload;
    },
  },
});

export const cryptoActions = cryptoSlice.actions;

export default cryptoSlice;
