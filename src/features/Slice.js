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

export const fetchItems = createAsyncThunk(
  "fetchBook",
  async ({ type, id }) => {
    // console.log(type, id);
    const books = await Api.get(`${type}/${id}`);
    return books.data;
  }
);

const Slice = createSlice({
  name: "books",
  initialState: {
    AllBooks: {},
    characters: {},
    houses: {},
    individualItem: {},
  },
  reducers: {
    removeIndividualItem: (state) => {
      state.individualItem = {};
    },
  },
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

    [fetchItems.fulfilled]: (state, { payload }) => {
      return { ...state, individualItem: payload };
    },
  },
});

export const { removeIndividualItem } = Slice.actions;
export default Slice.reducer;
