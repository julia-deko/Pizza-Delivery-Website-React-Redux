import './Header.css';
import { Link } from "react-router-dom";
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export function Header() {
    const cart = useSelector(state => state.cart);
    const sum = useMemo(() => cart.reduce((sum, item) => sum + item.price*item.count, 0), [cart]);

    return (
        <div className="header">
            <div className="logo"></div>
            <nav>
                <Link to="/pizza">Pizza</Link>
                <Link to="/desserts">Desserts</Link>
                <Link to="/drinks">Drinks</Link>
            </nav>
            <div className="contacts">
                <h2>000-00-00</h2>
            </div>
            <div>
                <h2>{sum}$</h2>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
    )
}