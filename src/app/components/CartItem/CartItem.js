import { CountButtons } from '../CountButtons/CountButtons';

export function CartItem ({item, onRemoveHandler, onAddHandler}) {

    return (
        <div className="cartItem">
            <div>
                <h1>{item.name}</h1>
            </div>
            <CountButtons count={item.count} onAddHandler={onAddHandler} onRemoveHandler={onRemoveHandler} item={item} />
            <div>
                <h1>{item.price*item.count}$</h1>
            </div>
        </div>
    )
}