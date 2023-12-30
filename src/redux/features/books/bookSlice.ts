// bookSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  status: boolean;
  priceRange: number;
  selectedGenres: string[];
}

const initialState: ProductState = {
  status: false,
  priceRange: 1000,
  selectedGenres: [], // Make sure to include selectedGenres in the initial state
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
      const genre = action.payload;
      if (state.selectedGenres.includes(genre)) {
        // Remove genre if already selected
        state.selectedGenres = state.selectedGenres.filter(
          (selectedGenre) => selectedGenre !== genre
        );
      } else {
        // Add genre if not selected
        state.selectedGenres.push(genre);
      }
    },
    clearFilters: (state) => {
      state.selectedGenres = []; // Clear selectedGenres array
    },
  },
});

export const { toggleState, setPriceRange, toggleGenre, clearFilters } =
  bookSlice.actions;
export default bookSlice.reducer;
