import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { apiSlice } from "./APi/apiSlice";

// Reducers
import themeReducer from "./ThemeMode/ThemeMode.redux";
import userReducer from "./User/User.redux";
import searchReducer from "./Search/Search";
import favoritesReducer from "./Favorites/Favorites.redux";
import tempModeReducer from "./TempMode/TempMode.redux";



const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
}).concat(apiSlice.middleware);
  
// Reducers
const reducers = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
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