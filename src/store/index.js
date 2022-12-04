import { configureStore } from "@reduxjs/toolkit";

import cryptoSlice from "./crypto-slice";
import darkModeSlice from "./dark-mode-slice";

const store = configureStore({
  reducer: { crypto: cryptoSlice.reducer, darkMode: darkModeSlice.reducer },
});

export default store;