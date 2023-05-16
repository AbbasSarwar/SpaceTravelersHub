import { configureStore } from "@reduxjs/toolkit";
import { Rocket } from "./rockets/RocketsSlice";
import missionsReducer from './missions/missionsSlice';
export const store = configureStore({
    reducer: {
        rockets: Rocket.reducer,
        missions: missionsReducer,
    },
});
export default store;

