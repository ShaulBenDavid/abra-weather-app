import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

// Reducers
import toggleSwitchsReducer from "./ToggleSwitch/ToggleSwitch.redux";
import userReducer from "./User/User.redux";
import searchReducer from "./Search/Search";
import favoritesReducer from "./Favorites/Favorites.redux";



const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})
  
// Reducers
const reducers = combineReducers({
    toggleSwitchs: toggleSwitchsReducer,
    user: userReducer,
    search: searchReducer,
    favorites: favoritesReducer,
})

// Persist config
export const config = {
    key: 'root',
    storage: storage,
    blacklist: ['favorites'],
}

const persistedReducer = persistReducer(config, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: customizedMiddleware,
})

// Types

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;