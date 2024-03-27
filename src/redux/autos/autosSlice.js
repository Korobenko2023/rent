import { createSlice } from '@reduxjs/toolkit';
import { fetchAutos } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.message = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.message = null;
};

const autosSlice = createSlice({
   name: 'autos',  
   initialState: {
    items: [],
    isLoading: false,
    error: null,
    message: null,
   },
   extraReducers: builder => {
      builder
         .addCase(fetchAutos.pending, handlePending)
         .addCase(fetchAutos.fulfilled, (state, { payload }) => {
           state.isLoading = false;
           state.error = null;
           if (payload.length < 4) {
             state.message = 'Oops! No more autos.';
           }
           const toCheck = state.items.map((item) => item._id);
           const filteredItems = payload.filter(
           (item) => !toCheck.includes(item._id)
           );
           state.items = [...state.items, ...filteredItems];
         })
         .addCase(fetchAutos.rejected, handleRejected)
   }, 
});

export const autosReducer = autosSlice.reducer;
