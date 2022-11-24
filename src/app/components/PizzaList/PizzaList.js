import { Item } from "../Item/Item";
import { useEffect } from "react";
import { loadData } from "../../features/PizzaListSlice";
import { pizzas as PizzaData } from "../../Items";
import '../Item/ItemList.css';
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../features/CartSlice";
import { removeItem } from "../../features/CartSlice";

export function PizzaList() {

    const pizzas = useSelector(state => state.pizzaList);
    const dispatch = useDispatch();

    const onMount = () => {
        dispatch(loadData(PizzaData));
      };
      useEffect(onMount, []);

    const onAddHandler = (item) => {
        dispatch(addItem(item));
    }

    const onRemoveHandler = (item) => {
        dispatch(removeItem(item));
    }

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
                                onAddHandler={() => {onAddHandler(pizza)}}
                                onRemoveHandler={() => {onRemoveHandler(pizza)}}
                            />
                    })
                }
            </div>
        </div>
    );
};