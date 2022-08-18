import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./Slice";
export const store = configureStore({
  reducer: {
    books: bookSlice,
  },
});
