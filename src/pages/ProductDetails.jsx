import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../features/cart/cartSlice";

function ProductDetails() {
    const { id } = useParams();

    const dispatch = useDispatch();

    const product = useSelector((state) =>
        state.products.products.find(
            (product) => product.id === Number(id)
        )
    );

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden rounded-3xl border border-gray-200/70 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-xl md:p-6">

                {/* Product Image */}
                <div className="group relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8">

                    {/* Category Badge */}
                    <span className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-700 shadow-sm backdrop-blur">
                        {product.category} 
                    </span>

                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-96 w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Product Information */}
                <div className="flex flex-col justify-center px-2 py-6 md:px-6">

                    {/* Category */}
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        {product.category}
                    </p>

                    {/* Title */}
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
                        {product.title}
                    </h1>

                    {/* Rating / Stock */}
                    <div className="mt-4 flex items-center gap-3">
                        <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-600">
                            In Stock
                        </span>

                        <span className="text-sm text-gray-400">
                            Premium Product
                        </span>
                    </div>

                    {/* Price */}
                    <div className="mt-6">
                        <span className="text-4xl font-bold tracking-tight text-gray-900">
                            ₹{product.price}
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="my-6 h-px bg-gray-200" />

                    {/* Description */}
                    <p className="text-base leading-7 text-gray-600">
                        {product.description}
                    </p>

                    {/* Add to Cart */}
                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className="mt-8 w-full rounded-xl bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl active:scale-[0.98]"
                    >
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
