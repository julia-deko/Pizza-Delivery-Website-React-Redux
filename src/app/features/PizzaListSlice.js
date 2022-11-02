import { createSlice } from "@reduxjs/toolkit";

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: [],
    reducers: {
        loadData: (state, action) => {
            return action.payload;
        }
    }
});


export const { loadData } = pizzaSlice.actions;

export const pizzaListReducer = pizzaSlice.reducer;