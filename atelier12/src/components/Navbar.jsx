    import { useSelector } from "react-redux";
    import { Link } from "react-router-dom";

    function Navbar() {
    const totalQty = useSelector(state =>
        state.cart.items.reduce((sum, item) => sum + item.qty, 0)
    );

    return (
        <nav className="navbar">
        <h1 className="logo">FULLSTACK SHOP</h1>

        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>

            <Link to="/cart" className="cart-link">
            <img
                src="grocery-store.png"
                alt="Cart"
                className="cart-icon"
                width={25}
            />

            <span className="cart-badge">{totalQty}</span>
            </Link>
        </div>
        </nav>
    );
    }

    export default Navbar;
