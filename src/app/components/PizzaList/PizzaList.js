import { Pizza } from "../Pizza/Pizza";
import { useEffect } from "react";
import { loadData } from "../../features/PizzaListSlice";
import { pizzas as PizzaData } from "../../PizzaArr";
import './PizzaList.css';

export function PizzaList({ pizzas, dispatch }) {

    const onMount = () => {
        dispatch(loadData(PizzaData));
      };
      useEffect(onMount, [dispatch]);

    return (
        <div>
            {
                pizzas.map( pizza => {
                    return <Pizza 
                            key={pizza.id} 
                            name={pizza.name}
                            price={pizza.price} 
                            description={pizza.description}
                            dispatch={dispatch}
                        />
                })
            }
        </div>
    );
};