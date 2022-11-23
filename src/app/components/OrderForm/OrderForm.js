

export function OrderForm() {
    return (
        <div>
            <form>
                <h1>Make an order</h1>
                <div className="form-section">
                    <div>
                        <label>First Name</label>
                        <input />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input />
                    </div>
                    <div>
                        <label>Mobile Phone</label>
                        <input />
                    </div>
                    <div>
                        <label>Address Line</label>
                        <input />
                    </div>
                    <div>
                        <label>Comment</label>
                        <textarea></textarea>
                    </div>
                </div>
                <button>PAY AND ORDER</button>
            </form>
        </div>
    )
}