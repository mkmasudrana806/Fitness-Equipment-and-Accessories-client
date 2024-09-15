import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  searchTerm: string;
  priceRange: [number, number];
  selectedCategories: string[];
  sort: string;
  limit: number;
  page: number;
}

const initialState: FilterState = {
  searchTerm: "",
  priceRange: [0, 5000], // Default price range
  selectedCategories: [],
  sort: "Default",
  limit: 10,
  page: 1,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searchProducts: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setPriceFilterRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    addCategoryFilters: (state, action: PayloadAction<string>) => {
      state.selectedCategories.push(action.payload);
    },
    removeCategoryFilters: (state, action: PayloadAction<string>) => {
      state.selectedCategories = state.selectedCategories.filter(
        (category) => category !== action.payload
      );
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    resetFilters: (state) => {
      state.searchTerm = initialState.searchTerm;
      state.priceRange = initialState.priceRange;
      state.selectedCategories = initialState.selectedCategories;
      state.sort = initialState.sort;
      state.limit = initialState.limit;
      state.page = initialState.page;
    },
  },
});

export const {
  searchProducts,
  setPriceFilterRange,
  addCategoryFilters,
  removeCategoryFilters,
  setSort,
  setLimit,
  setPage,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
