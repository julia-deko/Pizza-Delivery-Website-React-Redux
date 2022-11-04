import { Item } from '../Item/Item';
import { loadData } from '../../features/DrinksListSlice';
import { drinks as DrinksData } from '../../Items';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../features/CartSlice';


export function DrinkList() {

    const drinks = useSelector(state => state.drinksList);
    const dispatch = useDispatch();

    const onMount = () => {
        dispatch(loadData(DrinksData));
      };
      useEffect(onMount, []);


    const onAddHandler = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div className="container">
            <div>
                {
                    drinks.map( drink => {
                        return <Item 
                                key={drink.id} 
                                name={drink.name}
                                price={drink.price} 
                                description={drink.description}
                                onAddHandler={() => {onAddHandler(drink)}}
                            />
                    })
                }
            </div>
        </div>
    )
}