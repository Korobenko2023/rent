import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65ff0520df565f1a6144a6d8.mockapi.io/advert/';

export const fetchAutos = createAsyncThunk(
    "autos",
    async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("advert");
      console.log(data)
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);