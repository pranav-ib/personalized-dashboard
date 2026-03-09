import { createSlice } from "@reduxjs/toolkit";

const savedCategories = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("categories") || "[]") : [];

const initialState = {
    categories: savedCategories
};

const preferenceSlice = createSlice({
    name: "preference",
    initialState,
    reducers: {
        setCategory: (state, action) => {

            const category = action.payload;

            const exists = state.categories.includes(category);

            if(exists){
                state.categories = state.categories.filter((cat: any) => cat !== category);
            } else {
                state.categories.push(category);
            }

            localStorage.setItem("categories",JSON.stringify(state.categories));
        }
    }
});

export const {setCategory} = preferenceSlice.actions;
export default preferenceSlice.reducer;
