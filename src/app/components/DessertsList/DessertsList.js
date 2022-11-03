import { Item } from '../Item/Item';
import { loadData } from '../../features/DessertsListSlice';
import { desserts as DessertsData } from '../../Items';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';



export function DessertsList() {

    const desserts = useSelector(state => state.dessertsList);
    const dispatch = useDispatch();

    const onMount = () => {
        dispatch(loadData(DessertsData));
      };
      useEffect(onMount, []);

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
                            />
                    })
                }
            </div>
        </div>
    )
}