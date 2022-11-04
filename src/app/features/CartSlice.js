import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        displayCart: (state, action) => {
            return action.payload;
        },
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        }
    }
});

export const { displayCart, addItem, removeItem } = cartSlice.actions;
export const cartSliceReducer = cartSlice.reducer;