import { createSlice } from '@reduxjs/toolkit';
import { fetchAutos } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const autosSlice = createSlice({
   name: 'autos',  
   initialState: {
   autosItems: [],
   visibleItems: [],
   currentPage: 1,
   totalPages: 1,
   favorites: [],
   isLoading: false,
   error: null,
   },
   reducers: {
    updateCurrentPage(state) {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1;
        state.visibleItems = state.autosItems.slice(0, state.currentPage * 4);
      }
     },
      updateFavorites(state, action) {
      state.favorites = action.payload;
    },
      addFavorites(state, action) {
      state.favorites.push(action.payload);
    },

      removeFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (camper) => camper.id !== action.payload.id
      );
    },
  },
   extraReducers: builder => {
      builder
         .addCase(fetchAutos.pending, handlePending)
         .addCase(fetchAutos.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.autosItems = payload;
            state.totalPages = Math.ceil(state.autosItems.length / 4);
            state.visibleItems = state.autosItems.slice(0, state.currentPage * 4);
         })
         .addCase(fetchAutos.rejected, handleRejected)
   }, 
});

export const autosReducer = autosSlice.reducer;
export const { updateCurrentPage, updateFavorites, addFavorites, removeFavorites } = autosSlice.actions;