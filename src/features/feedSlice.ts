import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const feedSlice = createSlice({
    name:"feed",
    initialState,
    reducers:{
        setFeed: (state, action) => {
            state.items = action.payload
        }
    }
})

export const {setFeed} = feedSlice.actions
export default feedSlice.reducer