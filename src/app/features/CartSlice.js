import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const item = state.find(i => i.id === action.payload.id);
            if(item) {
                 item.count++;
             } else {
                 state.push({...action.payload, count: 1});
             }
        },
        removeItem: (state, action) => {
            const itemIndex = state.findIndex(i => i.id === action.payload.id);
            if(itemIndex != -1 ) {
                state[itemIndex].count--;
                if(state[itemIndex].count === 0) {
                    state.splice(itemIndex, 1);
                }
            } 
        }
    }
});

export const { addItem, removeItem } = cartSlice.actions;
export const cartSliceReducer = cartSlice.reducer;