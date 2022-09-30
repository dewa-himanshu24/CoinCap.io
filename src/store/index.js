import { configureStore } from "@reduxjs/toolkit";

import cryptoSlice from "./crypto-slice";

const store = configureStore({
  reducer: { crypto: cryptoSlice.reducer },
});

export default store;