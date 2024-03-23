import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://65f9e9153909a9a65b19a2a2.mockapi.io/advert/';

export const fetchAutos = createAsyncThunk(
    "autos",
    async (_, thunkAPI) => {
    try {
      const {data} = await axios.get("/autos");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);