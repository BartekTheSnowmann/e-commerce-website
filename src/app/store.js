import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from "../features/shoppingCartSlice";

export const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartSlice
    },
})