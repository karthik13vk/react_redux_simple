// src/components/Cart.jsx

import { useDispatch, useSelector } from "react-redux";

import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
} from "../features/cart/cartSlice";

function Cart() {
    const dispatch = useDispatch();

    const items = useSelector((state) => state.cart.items);

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">

            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Shopping Cart
            </h2>

            {/* Cart Items */}
            <div className="space-y-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow-md border border-gray-100
                           p-5 flex flex-col sm:flex-row sm:items-center
                           justify-between gap-4 hover:shadow-lg transition"
                    >
                        {/* Product Info */}
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 mt-1">
                                ₹{item.price} × {item.quantity}
                            </p>

                            <p className="text-blue-600 font-semibold mt-1">
                                ₹{item.price * item.quantity}
                            </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() =>
                                    dispatch(decreaseQuantity(item.id))
                                }
                                className="w-9 h-9 rounded-lg bg-gray-200
                                   text-gray-700 font-bold text-lg
                                   hover:bg-gray-300 transition"
                            >
                                -
                            </button>

                            <span className="w-10 text-center font-semibold text-gray-800">
                                {item.quantity}
                            </span>

                            <button
                                onClick={() =>
                                    dispatch(increaseQuantity(item.id))
                                }
                                className="w-9 h-9 rounded-lg bg-blue-600
                                   text-white font-bold text-lg
                                   hover:bg-blue-700 transition"
                            >
                                +
                            </button>
                        </div>

                        {/* Remove Button */}
                        <button
                            onClick={() =>
                                dispatch(removeFromCart(item.id))
                            }
                            className="px-4 py-2 rounded-lg bg-red-50
                               text-red-600 font-medium
                               hover:bg-red-100 transition"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            {/* Total */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6 flex items-center justify-between border">
                <h2 className="text-xl font-semibold text-gray-800">
                    Total
                </h2>

                <h2 className="text-2xl font-bold text-green-600">
                    ₹{total}
                </h2>
            </div>

        </div>

    );
}

export default Cart;
