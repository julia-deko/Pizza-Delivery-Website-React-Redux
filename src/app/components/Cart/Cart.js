import { useSelector, useDispatch } from "react-redux"
import { removeItem } from "../../features/CartSlice";

export function Cart() {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const onRemoveHandler = (item) => {
        dispatch(removeItem(item));
    }

    return (
        <div>
            <h1>{cart.length === 0 ? 'Your cart is empty' : 'Your Order'}</h1>
            <div className="cartList">
                {
                    cart.map(item => {
                        return (
                            <div>
                                <h1>{item.name}</h1>
                                <button onClick={()=>{onRemoveHandler(item)}}>-</button>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    )
}