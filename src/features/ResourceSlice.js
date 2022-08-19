import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../api/Api";

export const fetchItems = createAsyncThunk(
  "fetchResourceDetails",
  async ({ type, id }) => {
    const response = await Api.get(`${type}/${id}`);
    return response.data;
  }
);
export const fetchData = createAsyncThunk("fetchData", async ({ type, id }) => {
  const res = await Api.get(`${type}?page=${id}&pageSize=30`);
  return res.data;
});

const resourceSlice = createSlice({
  name: "resources",
  initialState: {
    individualResource: {},
    resourceType: "books",
    individualResourceData: {},
  },
  reducers: {
    setResourceType: (state, { payload }) => {
      state.resourceType = payload;
    },
    removeIndividualResource: (state) => {
      state.individualResource = {};
    },
  },
  extraReducers: {
    [fetchItems.fulfilled]: (state, { payload }) => {
      return { ...state, individualResource: payload };
    },

    [fetchData.fulfilled]: (state, { payload }) => {
      return { ...state, individualResourceData: payload };
    },
  },
});

export const { removeIndividualResource, setResourceType } =
  resourceSlice.actions;
export default resourceSlice.reducer;
