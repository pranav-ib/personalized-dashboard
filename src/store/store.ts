import { configureStore } from "@reduxjs/toolkit"

import feedReducer from "../features/feedSlice"
import favoritesReducer from "../features/favoriteSlice"
import preferencesReducer from "../features/preferenceSlice"

export const store = configureStore({
    reducer: {
        feed:feedReducer,
        favorites: favoritesReducer,
        preferences: preferencesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch