import './Header.css';
import { Link } from "react-router-dom";

export function Header() {
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
                <h2>0,00$</h2>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
    )
}