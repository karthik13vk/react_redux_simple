import React, { useState } from "react";

const SearchBar = () => {
    const [newsearch, SetNewsearch] = useState("");

    const newproduct = [
        {
            id: 1,
            title: "Vegetable",
        },
        {
            id: 2,
            title: "Fruits",
        },
        {
            id: 3,
            title: "Chocolates",
        },
        {
            id: 4,
            title: "Toys",
        },
        {
            id: 5,
            title: "Accessories",
        },
    ];

    const filteredProductsnew = newproduct.filter((productnew) =>
        productnew.title.toLowerCase().includes(newsearch.toLowerCase())
    );
    const filternewproduct = newproduct.filter((newproductthinks) => newproductthinks.title.toLowerCase().includes(newsearch.toLowerCase))
    return (
        <div>
            {/* Search Section */}
            <div className="p-5 bg-amber-100">
                <h1 className="text-2xl font-bold mb-3">Search</h1>

                <input
                    type="text"
                    placeholder="Search"
                    value={newsearch}
                    onChange={(e) => SetNewsearch(e.target.value)}
                    className="w-full sm:w-80 px-4 py-3 border border-gray-700 rounded-xl
          outline-none text-gray-700
          focus:ring-2 focus:ring-red-500
          focus:border-red-500 transition"
                />
            </div>

            {/* Products */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 p-5">
                {filteredProductsnew.map((productnew) => (
                    <div
                        key={productnew.id}
                        className="p-4 bg-gray-100 rounded-lg text-center"
                    >
                        {productnew.title}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 p-5">
                <h2>sdsdsd</h2>
                {filternewproduct.map((newproductthinks) => (
                    <div
                        key={newproductthinks.id}
                        className="p-4 bg-gray-100 rounded-lg text-center"
                    >
                        {newproductthinks.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;