import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const fetchAllBooks = createAsyncThunk("fetchBooks", async () => {
  const res = await Api.get("books?pageSize=12");
  return res.data;
});

const Slice = createSlice({
  name: "books",
  initialState: {
    AllBooks: {},
    // characters: {},
    // houses: {},
  },
  reducers: {},
  extraReducers: {
    [fetchAllBooks.fulfilled]: (state, { payload }) => {
      //   console.log(payload);
      return { ...state, AllBooks: payload };
    },
  },
});

// export cons
export default Slice.reducer;
