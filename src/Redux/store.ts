import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeMode/ThemeMode";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    }
})

// Types

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;