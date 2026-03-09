import { configureStore } from "@reduxjs/toolkit";
import slice from "./Slice";

const store = configureStore({
  reducer: {
    info: slice
  }
});

export default store;