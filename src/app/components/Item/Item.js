import './Item.css';
import Image from '../../../images/pizza.jpg'
import { AddButton } from '../AddButton/AddButton';

export function Item({ name, price, description }) {
    return (
        <div className="pizza-box">
            <div className="pizza-img">
                <img src={Image}></img>
            </div>
            <h1>{name}</h1>
            <div className="price-box">
                <p className='price'>{price}$</p>
                <AddButton />
            </div>
            <p>{description}</p>
        </div>
    )
};