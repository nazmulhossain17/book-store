import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  status: boolean;
  priceRange: number;
  selectedGenres: string[];
}

const initialState: ProductState = {
  status: false,
  priceRange: 1000,
  selectedGenres: [],
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
    toggleGenre: (state, action: PayloadAction<string>) => {
      const genre = action.payload.toLowerCase();
      if (state.selectedGenres.includes(genre)) {
        state.selectedGenres = state.selectedGenres.filter((g) => g !== genre);
      } else {
        state.selectedGenres.push(genre);
      }
    },
  },
});

export const { toggleState, setPriceRange, toggleGenre } = bookSlice.actions;
export default bookSlice.reducer;
