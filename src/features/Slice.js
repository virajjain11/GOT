import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const fetchAllBooks = createAsyncThunk("fetchBooks", async () => {
  const books = await Api.get("books?pageSize=12");
  const characters = await Api.get("characters?pageSize=30");
  const houses = await Api.get("houses?pageSize=30");
  return {
    books: books.data,
    houses: houses.data,
    characters: characters.data,
  };
});

const Slice = createSlice({
  name: "books",
  initialState: {
    AllBooks: {},
    characters: {},
    houses: {},
  },
  reducers: {},
  extraReducers: {
    [fetchAllBooks.fulfilled]: (state, { payload }) => {
      //   console.log("payload", payload);
      return {
        ...state,
        AllBooks: payload.books,
        characters: payload.characters,
        houses: payload.houses,
      };
    },
  },
});

// export cons
export default Slice.reducer;
