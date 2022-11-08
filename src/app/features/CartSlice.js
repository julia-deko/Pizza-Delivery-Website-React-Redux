import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            // const item = state.find(i => i.id === action.payload.id);
            // if(item) {
            //     item.count++;
            // } else {
            //     state.push({...action.payload, count: 1});
            // }

            state.push(action.payload);
        },
        removeItem: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        }
    }
});

export const { addItem, removeItem } = cartSlice.actions;
export const cartSliceReducer = cartSlice.reducer;