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
      state.currentPage = action.payload; // 페이지 네이션이랑 겹치는거 같아서 빼버리면 모달이 안먹히는 참사가 나타나서 냅두는중.. //
    },
    setSelectedGame(state, action) {
      state.selectedGame = action.payload;
    },
  },
});

export const { setGames, setLoading, setCurrentPage, setSelectedGame } = gameRankSlice.actions;
export default gameRankSlice.reducer;
