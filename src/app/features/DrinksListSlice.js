import { createSlice } from "@reduxjs/toolkit";

const drinksSlice = createSlice({
    name: 'drinks',
    initialState: [],
    reducers: {
        loadData: (state, action) => {
            return action.payload;
        }
    }
});

export const { loadData } = drinksSlice.actions;

export const drinksListReducer =  drinksSlice.reducer;