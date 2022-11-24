import { useSelector, useDispatch } from "react-redux"
import { addItem, removeItem } from "../../features/CartSlice";
import { useMemo } from "react";
import { CartItem } from "../CartItem/CartItem";
import { Link } from "react-router-dom";

export function Cart() {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const sum = useMemo(() => cart.reduce((sum, item) => sum + item.price*item.count, 0), [cart]);

    const onRemoveHandler = (item) => {
        dispatch(removeItem(item));
    }

    const onAddHandler = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div className="cart">
            <h1>{cart.length === 0 ? 'Your cart is empty' : 'Your Order'}</h1>
            <h1>{sum === 0 ? '' : `Total: ${sum}$` }</h1>
            <div className="cartList">
                {
                    cart.map(item => {
                        return <CartItem item={item} onRemoveHandler={onRemoveHandler} onAddHandler={onAddHandler} />
                    } )
                }
            </div>
            <br />
            <div>
                {cart.length === 0 ? '' : <Link to="/order"><button>Order</button></Link> }
            </div>
        </div>
    )
}