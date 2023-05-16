import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  missions: [],
  error: '',
};

export const missionsData = createAsyncThunk('get/fetchmissions', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data;
  } catch (error) {
    throw Error('Error fetching data from API');
  }
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(missionsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(missionsData.fulfilled, (state, { payload }) => {
        state.loading = false;
        const data = payload.map((mission)=>({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
      }));
          state.missions = data;
        })
      .addCase(missionsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default missionsSlice.reducer;