// src/components/ProductList.jsx

import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function ProductList() {
    const products = useSelector(
        (state) => state.products.products
    );

    return (
        <div className="products">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default ProductList;
