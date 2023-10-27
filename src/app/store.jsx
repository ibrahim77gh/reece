import { configureStore } from "@reduxjs/toolkit";
import openReducer from  '../components/slices/sidebarOpen'

export const store = configureStore({
    reducer: {
        sidebarReducer: openReducer,
    }
})