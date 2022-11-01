import { drinks } from "../Items";

export const loadData = (data) => {
    return {
        type: 'drinks/loadData',
        payload: data
    };
};

const initialDrinksList = [];

export const drinksListReducer = ( drinks = initialDrinksList, action ) => {
    switch(action.type) {
        case 'drinks/loadData': {
            return action.payload;
        }
        default: {
            return drinks;
        }
    }
};