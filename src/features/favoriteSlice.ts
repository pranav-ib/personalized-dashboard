import {createSlice,} from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState : {
        items: [] as any[]
    },
    reducers: {
        addFavorite: (state, action) => {
            state.items.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.items = state.items.filter((item: any) => item.id !== action.payload);
        }
    }
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;