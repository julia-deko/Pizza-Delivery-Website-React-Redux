
export function CountButtons({item, onRemoveHandler, onAddHandler, count}) {
    return (
        <div>
             <div>
                <button onClick={() => {onAddHandler(item)}}>+</button>
            </div>
            <div>
                <h1>{count}</h1>
            </div>
            <div>
                <button onClick={() => {onRemoveHandler(item)}}>-</button>
            </div>
        </div>
    )
}