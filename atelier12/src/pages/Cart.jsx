    import { useDispatch, useSelector } from "react-redux";
    import { removeFromCart, updateQty } from "../features/cartSlice";

    function Cart() {
        const items = useSelector(state => state.cart.items);
        const dispatch = useDispatch();

        const totalPrice = items.reduce(
            (sum, item) => sum + item.price * item.qty,
            0
        );

        return (
            <div className="page">
                <h2 className="page-title">Your Cart</h2>

                {items.length === 0 && (
                    <p className="empty">Your cart is empty</p>
                )}

                {items.map(item => (
                    <div key={item.id} className="cart-item">
                        <span>{item.name}</span>

                        <input
                            type="number"
                            min="1"
                            value={item.qty}
                            onChange={e =>
                                dispatch(
                                    updateQty({
                                        id: item.id,
                                        qty: Number(e.target.value),
                                    })
                                )
                            }
                        />

                        <span>{item.price * item.qty} €</span>

                        <button
                            className="btn danger"
                            onClick={() =>
                                dispatch(removeFromCart(item.id))
                            }
                        >
                            Remove
                        </button>
                    </div>
                ))}

                {items.length > 0 && (
                    <h3 className="total">
                        Total: {totalPrice.toFixed(2)} €
                    </h3>
                )}
            </div>
        );
    }

    export default Cart;
