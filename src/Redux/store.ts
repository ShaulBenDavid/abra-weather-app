import themeReducer from "./ThemeMode/ThemeMode";
import userReducer from "./User/User";
import searchReducer from "./Search/Search";
import favoritesReducer from "./Favorites/Favorites.redux";
import tempModeReducer from "./TempMode/TempMode.redux";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { getDefaultMiddleware } from '@reduxjs/toolkit';


const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})
  
// Reducers
const reducers = combineReducers({
    theme: themeReducer,
    user: userReducer,
    search: searchReducer,
    favorites: favoritesReducer,
    tempMode: tempModeReducer,
})

// Persist config
export const config = {
    key: 'root',
    storage: storage,
    whitelist: ['theme', 'user', 'search', "tempMode"],
}

const persistedReducer = persistReducer(config, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: customizedMiddleware,
})

// Types

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;