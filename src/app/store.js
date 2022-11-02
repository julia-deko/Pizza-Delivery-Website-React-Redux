import { combineReducers } from 'redux';
import { pizzaListReducer } from './features/PizzaListSlice';
import { drinksListReducer } from './features/DrinksListSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore(
    {
        reducer: {
            pizzaList: pizzaListReducer,
            drinksList: drinksListReducer
        }
    }
);