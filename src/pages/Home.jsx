import { useState } from "react";
import { useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Home() {
    const [search, setSearch] = useState("");

    const products = useSelector(
        (state) => state.products.products
    );

    const filteredProducts = products.filter((product) =>
        product.title
            .toLowerCase()
            .includes(search.toLowerCase())
    );



    return (
        <>
            <div className="max-w-7xl mx-auto px-6 py-4 ">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 my-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Products
                    </h1>

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full sm:w-80 px-4 py-3 border border-gray-300 rounded-xl
                       outline-none text-gray-700
                       focus:ring-2 focus:ring-blue-500
                       focus:border-blue-500 transition"
                    />
                </div>

                <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>


                {filteredProducts.length === 0 && (
                    <h2>No products found</h2>
                )}
            </div>
            <div className="max-w-7xl mx-auto px-6 py-4 ">
                <SearchBar />
            </div>

        </>
    );
}

export default Home;
