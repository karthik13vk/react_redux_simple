import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Brand */}
                <Link
                    to="/"
                    className="group flex items-center gap-3"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-sm font-black text-white transition-all duration-300 group-hover:bg-blue-600">
                        M
                    </div>

                    <div className="hidden sm:block">
                        <h1 className="text-lg font-bold tracking-tight text-gray-950">
                            My Store
                        </h1>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                            Premium Shop
                        </p>
                    </div>
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-2">

                    <Link
                        to="/"
                        className="rounded-full px-5 py-2.5 text-sm font-semibold text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-gray-950"
                    >
                        Home
                    </Link>

                    <Link
                        to="/cart"
                        className="group flex items-center gap-3 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
                    >
                        <span>Cart</span>

                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1.5 text-xs font-bold text-gray-950 transition-colors group-hover:text-blue-600">
                            {cartCount}
                        </span>
                    </Link>

                </div>
            </div>
        </nav>

    );
}

export default Navbar;
