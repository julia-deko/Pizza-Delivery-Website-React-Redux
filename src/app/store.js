import { combineReducers } from 'redux';
import { pizzaListReducer } from './features/PizzaListSlice';
import { drinksListReducer } from './features/DrinksListSlice';
import { dessertsListReducer } from './features/DessertsListSlice';
import { configureStore } from '@reduxjs/toolkit';
import { cartSliceReducer } from './features/CartSlice';

export const store = configureStore(
    {
        reducer: {
            pizzaList: pizzaListReducer,
            drinksList: drinksListReducer,
            dessertsList: dessertsListReducer,
            cart: cartSliceReducer
        }
    }
);