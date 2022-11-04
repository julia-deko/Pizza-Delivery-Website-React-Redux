import './Item.css';
import Image from '../../../images/pizza.jpg'
import { AddButton } from '../AddButton/AddButton';

export function Item({ name, price, description, onAddHandler }) {

    return (
        <div className="pizza-box">
            <div className="pizza-img">
                <img src={Image}></img>
            </div>
            <h1>{name}</h1>
            <div className="price-box">
                <p className='price'>{price}$</p>
                <AddButton onAddHandler={onAddHandler} />
            </div>
            <p>{description}</p>
        </div>
    )
};