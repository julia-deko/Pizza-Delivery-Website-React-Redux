import './Pizza.css';
import Image from '../../../images/pizza.jpg'

export function Pizza({ name, price, description, dispatch }) {


    return (
        <div className="pizza-box">
            <div className="pizza-img">
                <img src={Image}></img>
            </div>
            <h1>{name}</h1>
            <div className="price-box">
                <p>Price {price}</p>
                <button>Add</button>
            </div>
            <p>{description}</p>
        </div>
    )
};