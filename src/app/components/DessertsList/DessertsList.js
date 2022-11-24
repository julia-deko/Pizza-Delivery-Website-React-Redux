import { Item } from '../Item/Item';
import { loadData } from '../../features/DessertsListSlice';
import { desserts as DessertsData } from '../../Items';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../features/CartSlice';



export function DessertsList() {

    const desserts = useSelector(state => state.dessertsList);
    const dispatch = useDispatch();

    const onMount = () => {
        dispatch(loadData(DessertsData));
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
                    desserts.map( dessert => {
                        return <Item 
                                key={dessert.id} 
                                name={dessert.name}
                                price={dessert.price} 
                                description={dessert.description}
                                onAddHandler={() => {onAddHandler(dessert)}}
                                onRemoveHandler={() => {onRemoveHandler(dessert)}}
                            />
                    })
                }
            </div>
        </div>
    )
}