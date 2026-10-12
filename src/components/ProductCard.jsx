import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../features/cart/cartSlice";

function ProductCard({ product }) {
    const dispatch = useDispatch();

    return (
        <div className="group relative w-full overflow-hidden rounded-3xl border border-gray-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

            {/* Image */}
            <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />

                {/* Category badge */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur">
                    {product.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <h2 className="line-clamp-2 min-h-[3.5rem] text-lg font-semibold text-gray-900">
                    {product.title}
                </h2>

                <div className="mt-4 flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">
                        ₹{product.price}
                    </p>

                    <span className="text-sm text-gray-500">
                        In Stock
                    </span>
                </div>

                <div className="mt-5 flex gap-3">
                    <Link
                        to={`/product/${product.id}`}
                        className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                    >
                        Details
                    </Link>

                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className="flex-1 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 active:scale-95"  >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>


    );
}

export default ProductCard;
