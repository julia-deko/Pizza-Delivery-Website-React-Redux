import { createStore, combineReducers } from 'redux';
import { pizzaListReducer } from './features/PizzaListSlice';
import { drinksListReducer } from './features/DrinksListSlice';

export const store = createStore(combineReducers(
    {
        pizzaList: pizzaListReducer,
        drinksList: drinksListReducer
    }
));