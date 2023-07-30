import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: {
    cpu: null,
    ram: null,
    monitor: null,
    storage: null,
    motherboard: null,
    powersupply: null,
    others: null,
  },
  selectedCategory: "",
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      state.selectedProducts[action.payload.key] = action.payload.data;
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    removeToBuilder: (state, action) => {
      state.selectedProducts = action.payload;
      state.selectedCategory = "";
    },
  },
});

export const { addToBuilder, selectCategory, removeToBuilder } =
  builderSlice.actions;

export default builderSlice.reducer;
