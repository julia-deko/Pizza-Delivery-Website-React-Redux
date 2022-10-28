import { createStore } from 'redux';
import { pizzaListReducer } from './features/PizzaListSlice';

export const store = createStore(pizzaListReducer);