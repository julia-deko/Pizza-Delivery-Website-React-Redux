import './Header.css';

export function Header() {
    return (
        <div className="header">
            <div className="logo"></div>
            <nav>
                <a>Pizza</a>
                <a>Sides</a>
                <a>Desserts</a>
                <a>Drinks</a>
            </nav>
            <div className="contacts">
                <h2>000-00-00</h2>
            </div>
            <div>
                <h2>0,00$</h2>
                <h3>Cart</h3>
            </div>
        </div>
    )
}