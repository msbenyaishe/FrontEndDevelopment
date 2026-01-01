    import { Link } from "react-router-dom";

    function Home() {
        return (
            <div className="home">
                <div className="home-container">
                    <div className="home-text">
                        <h1 className="home-title">
                            Build Your Style With Code
                        </h1>

                        <p className="home-subtitle">
                            A modern e-commerce experience built with
                            React and Redux Toolkit.
                        </p>

                        <Link to="/products" className="home-btn">
                            Explore Products
                        </Link>
                    </div>

                    <div className="home-image">
                        <img
                            src="https://i.pinimg.com/1200x/eb/be/80/ebbe8015b260c1ac293c3c58ff36631a.jpg"
                            alt="Shop illustration"
                            width={100}
                        />
                    </div>
                </div>
            </div>
        );
    }

    export default Home;
