import { createSlice } from "@reduxjs/toolkit";

const gameRankSlice = createSlice({
  name: "gameRank",
  initialState: {
    games: [],
    loading: true,
    currentPage: 1,
    selectedGame: null,
  },
  reducers: {
    setGames(state, action) {
      state.games = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSelectedGame(state, action) {
      state.selectedGame = action.payload;
    },
  },
});

export const { setGames, setLoading, setCurrentPage, setSelectedGame } = gameRankSlice.actions;
export default gameRankSlice.reducer;
