import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    categories: [] as any
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
        }
    }
});

export const {setCategory} = preferenceSlice.actions;
export default preferenceSlice.reducer;
