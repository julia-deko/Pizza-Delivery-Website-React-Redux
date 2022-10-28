import { pizzas } from "../PizzaArr";

export const loadData = (data) => {
    return {
        type: 'pizza/loadData',
        payload: data
    };
};

const initialPizzaList = [];

export const pizzaListReducer = ( pizzas = initialPizzaList, action ) => {
    switch(action.type) {
        case 'pizza/loadData': {
            return action.payload;
        }
        default: {
            return pizzas;
        }
    }
};

