import { configureStore } from "@reduxjs/toolkit";
import gotResources from "./ResourceSlice";
export const store = configureStore({
  reducer: {
    resources: gotResources,
  },
});
