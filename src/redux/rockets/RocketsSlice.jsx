import {createSlice} from '@reduxjs/toolkit';
import { FetchData } from './API';

const initialState = {
    rockets: [],
    status:true,
    error:null,
};



const Rocketslice = createSlice({
    name:"Rockets",
    initialState,
    reducers: {
        reserveRocket: (state, { payload }) => {
          const rockets = state.rockets.map((rocket) => {
            if (rocket.id === payload) return { ...rocket, reserved: !rocket.reserved };
            return rocket;
          });
          return { ...state, rockets };
        },
      },
    extraReducers(builder){
        builder
        .addCase(FetchData.fulfilled, (state, action)=>({
            ...state,
            rockets: action.payload,
            status: false,
        }))
    },
});
export const { reserveRocket } = Rocketslice.actions;
export default Rocketslice.reducer;