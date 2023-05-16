import { configureStore } from "@reduxjs/toolkit";
import Rocketslice from "./rockets/RocketsSlice";
import missionsReducer from './missions/missionsSlice';
export const store = configureStore({
    reducer: {
        rockets: Rocketslice,
        missions: missionsReducer,
});
export default store;

