import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
    gameSortBy: "",
    sortBy: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setGameSortBy: (state, action) => {
      state.gameSortBy = action.payload;
    },

    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    resetSearch: (state) => {
      state.searchQuery = "";
      state.sortBy = null;
    },
  },
});

export const { setSearchQuery, setGameSortBy, setSortBy, resetSearch } = searchSlice.actions;

export default searchSlice.reducer;
