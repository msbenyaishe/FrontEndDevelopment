    import { useDispatch } from "react-redux";
    import { addToCart } from "../features/cartSlice";

    function ProductCard({ product }) {
        const dispatch = useDispatch();

        return (
            <div className="product-card">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />

                <h3>{product.name}</h3>
                <p className="price">{product.price} €</p>

                <button
                    className="btn"
                    onClick={() => dispatch(addToCart(product))}
                >
                    Add to cart
                </button>
            </div>
        );
    }

    export default ProductCard;
