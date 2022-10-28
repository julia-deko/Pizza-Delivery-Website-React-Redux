import { Pizza } from "../Pizza/Pizza";
import { useEffect } from "react";
import { loadData } from "../../features/PizzaListSlice";
import { pizzas as PizzaData } from "../../PizzaArr";
import './PizzaList.css';
import { useSelector, useDispatch } from "react-redux";

export function PizzaList() {

    const pizzas = useSelector(state => state);
    const dispatch = useDispatch();

    const onMount = () => {
        dispatch(loadData(PizzaData));
      };
      useEffect(onMount, []);

    return (
        <div className="container">
            <div>
                {
                    pizzas.map( pizza => {
                        return <Pizza 
                                key={pizza.id} 
                                name={pizza.name}
                                price={pizza.price} 
                                description={pizza.description}
                            />
                    })
                }
            </div>
        </div>
    );
};