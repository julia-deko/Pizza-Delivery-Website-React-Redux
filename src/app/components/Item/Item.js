import './Item.css';
import Image from '../../../images/pizza.jpg'
import { AddButton } from '../AddButton/AddButton';
import { useSelector } from 'react-redux';
import { CountButtons } from '../CountButtons/CountButtons';

export function Item({ name, price, description, onAddHandler, onRemoveHandler }) {
    const cartItem = useSelector(state => state.cart.find(x => x.name === name));
    const existsInCart = !!cartItem;

    return (
        <div className="pizza-box">
            <div className="pizza-img">
                <img src={Image}></img>
            </div>
            <h1>{name}</h1>
            <div className="price-box">
                <p className='price'>{price}$</p>
                {existsInCart ? <CountButtons count={cartItem.count} onRemoveHandler={onRemoveHandler} onAddHandler={onAddHandler} /> : <AddButton onAddHandler={onAddHandler} /> }
            </div>
            <p>{description}</p>
        </div>
    )
};