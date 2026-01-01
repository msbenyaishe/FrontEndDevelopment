    import { BrowserRouter, Routes, Route } from "react-router-dom";
    import Navbar from "./components/Navbar";
    import Footer from "./components/Footer";
    import Home from "./pages/Home";
    import Products from "./pages/Products";
    import Cart from "./pages/Cart";

    function App() {
        return (
            <BrowserRouter>
                <div className="app-layout">
                    <Navbar />

                    <main className="app-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </BrowserRouter>
        );
    }

    export default App;
