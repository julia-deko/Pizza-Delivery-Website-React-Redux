import { createSlice } from "@reduxjs/toolkit";

const dessertsSlice = createSlice({
    name: 'desserts',
    initialState: [],
    reducers: {
        loadData: (state, action) => {
            return action.payload;
        }
    }
});

export const { loadData } = dessertsSlice.actions;

export const dessertsListReducer =  dessertsSlice.reducer;