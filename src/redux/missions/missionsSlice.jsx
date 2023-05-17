import { createSlice } from '@reduxjs/toolkit';
import { missionsData } from './MissionsAPI';

const initialState = {
  loading: false,
  missions: [],
  error: '',
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, { payload }) => {
     const missions = state.missions.map((mission) => {
        if (mission.id === payload) return { ...mission, reserved: true };
        return mission;
      });
      return { ...state, missions };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(missionsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(missionsData.fulfilled, (state, {payload}) => ({
        ...state,
        loading: false,
        missions: payload,
      }))
      .addCase(missionsData.rejected, (state, {error}) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export const { joinMission } = missionsSlice.actions;
export default missionsSlice.reducer;