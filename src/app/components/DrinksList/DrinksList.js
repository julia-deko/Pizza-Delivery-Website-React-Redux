import { Item } from '../Item/Item';
import { loadData } from '../../features/DrinksListSlice';
import { drinks as DrinksData } from '../../Items';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export function DrinkList() {

    const drinks = useSelector(state => state.drinksList);
    const dispatch = useDispatch();

    const onMount = () => {
        dispatch(loadData(DrinksData));
      };
      useEffect(onMount, []);

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
                            />
                    })
                }
            </div>
        </div>
    )
}