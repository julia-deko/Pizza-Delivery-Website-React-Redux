import { useSelector, useDispatch } from "react-redux"

export function Cart() {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{cart.length === 0 ? 'Your cart is empty' : ''}</h1>
            <div>
                {
                    cart.map(item => {
                        return <h1>{item.name}</h1>
                    } )
                }
            </div>
        </div>
    )
}