import { configureStore } from "@reduxjs/toolkit"

import feedReducer from "../features/feedSlice"
import favoritesReducer from "../features/favoriteSlice"
import preferencesReducer from "../features/preferenceSlice"
import searchReducer from "../features/searchSlice"

export const store = configureStore({
    reducer: {
        feed:feedReducer,
        favorites: favoritesReducer,
        preferences: preferencesReducer,
        search: searchReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch