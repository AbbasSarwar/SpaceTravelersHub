import { configureStore } from "@reduxjs/toolkit";
import { Rocket } from "./rockets/RocketsSlice";
export const store = configureStore({
    reducer: {
        rockets: Rocket.reducer,
    },
})