import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  status: boolean;
  priceRange: number;
}

const initialState: ProductState = {
  status: false,
  priceRange: 1000,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    toggleState: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});

export const { toggleState, setPriceRange } = bookSlice.actions;
export default bookSlice.reducer;
