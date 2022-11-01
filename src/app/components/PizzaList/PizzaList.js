import { Item } from "../Item/Item";
import { useEffect } from "react";
import { loadData } from "../../features/PizzaListSlice";
import { pizzas as PizzaData } from "../../Items";
import '../Item/ItemList.css';
import { useSelector, useDispatch } from "react-redux";

export function PizzaList() {

    const pizzas = useSelector(state => state.pizzaList);
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
                        return <Item 
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