import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    category: "technology"
};

const preferenceSlice = createSlice({
    name: "preference",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        }
    }
});

export const {setCategory} = preferenceSlice.actions;
export default preferenceSlice.reducer;
