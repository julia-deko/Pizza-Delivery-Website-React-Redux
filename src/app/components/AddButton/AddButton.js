import { addItem } from "../../features/CartSlice"
import { useDispatch } from "react-redux"

export function AddButton({onAddHandler}) {

    return (
        <button onClick={onAddHandler}>
            Add to Cart
        </button>
    )
}