import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailsState: [],
};

const details = createSlice({
  name: "details",
  initialState: initialState,
  reducers: {
    addDetails: (state, action) => {
      state.detailsState.push(action.payload);
    },
    clearData: (state) => {
      state.detailsState = [];
    },
  },
});

export const { addDetails , clearData } = details.actions;

export default details.reducer;