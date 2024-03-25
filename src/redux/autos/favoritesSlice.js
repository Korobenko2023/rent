import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
    reducers: {
        addFavorites(state, { payload }) {
            state.push(payload);
        },
        removeFavorites(state, { payload }) {
            const index = state.findIndex((item) => item._id === payload);
            state.splice(index, 1);
        },
    },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addFavorites, removeFavorites } = favoritesSlice.actions;