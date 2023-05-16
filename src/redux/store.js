import { configureStore } from "@reduxjs/toolkit";
import Rocketslice from "./rockets/RocketsSlice";
export const store = configureStore({
    reducer: {
        rockets: Rocketslice,
    },
})