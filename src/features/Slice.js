import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../api/Api";

// export const fetchAllBooks = createAsyncThunk("fetchBooks", async () => {
//   const books = await Api.get("books?pageSize=12");
//   const characters = await Api.get("characters?pageSize=30");
//   const houses = await Api.get("houses?pageSize=30");
//   return {
//     books: books.data,
//     houses: houses.data,
//     characters: characters.data,
//   };
// });

export const fetchItems = createAsyncThunk(
  "fetchBook",
  async ({ type, id }) => {
    // console.log(type, id);
    const books = await Api.get(`${type}/${id}`);
    return books.data;
  }
);
export const fetchData = createAsyncThunk("fetchData", async ({ type, id }) => {
  //   console.log(type, id);
  const res = await Api.get(`${type}?page=${id}&pageSize=30`);
  return res.data;
});

const Slice = createSlice({
  name: "books",
  initialState: {
    // AllBooks: {},
    // characters: {},
    // houses: {},
    individualItem: {},
    resourceType: "books",
    general: {},
  },
  reducers: {
    setResourceType: (state, { payload }) => {
      console.log(payload);
      state.resourceType = payload;
    },
    removeIndividualItem: (state) => {
      state.individualItem = {};
    },
  },
  extraReducers: {
    // [fetchAllBooks.fulfilled]: (state, { payload }) => {
    //   //   console.log("payload", payload);
    //   return {
    //     ...state,
    //     AllBooks: payload.books,
    //     characters: payload.characters,
    //     houses: payload.houses,
    //   };
    // },

    [fetchItems.fulfilled]: (state, { payload }) => {
      return { ...state, individualItem: payload };
    },

    [fetchData.fulfilled]: (state, { payload }) => {
      return { ...state, general: payload };
    },
  },
});

export const { removeIndividualItem, setResourceType } = Slice.actions;
export default Slice.reducer;
