import ProductCard from "../components/ProductCard";

    function Products() {
        const products = [
            {
                id: 1,
                name: "JavaScript Mug",
                price: 9.99,
                image: "https://i.etsystatic.com/19639181/r/il/a4077b/2784301157/il_fullxfull.2784301157_a07n.jpg",
            },
            {
                id: 2,
                name: "React JS T-Shirt",
                price: 14.99,
                image: "https://www.tee-nation.com/cdn/shop/files/show-your-love-for-reactjs-with-our-stylish-programming-skeleton-t-shirt-642006.jpg?v=1714625674",
            },
            {
                id: 3,
                name: "Mechanical Keyboard",
                price: 79.99,
                image: "https://i.pinimg.com/1200x/f9/ad/89/f9ad89d256300ff343693e55aa9ed3f6.jpg",
            }
        ];

        return (
            <div className="page">
                <h2 className="page-title">Products</h2>

                <div className="products-grid">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        );
    }

    export default Products;
