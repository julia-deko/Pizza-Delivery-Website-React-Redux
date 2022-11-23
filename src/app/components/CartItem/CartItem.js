

export function CartItem ({item, onRemoveHandler, onAddHandler}) {

    return (
        <div className="cartItem">
            <div>
                <h1>{item.name}</h1>
            </div>
            <div>
                <h1>Quantity: { item.count }</h1>
            </div>
            <div>
                <button onClick={() => {onAddHandler(item)}}>+</button>
            </div>
            <div>
                <button onClick={() => {onRemoveHandler(item)}}>-</button>
            </div>
            <div>
                <h1>{item.price}$</h1>
            </div>
        </div>
    )
}