import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: 1,
            title: "iPhone 15",
            price: 69999,
            category: "Mobile",
            image: "https://picsum.photos/400/300?1",
            description:
                "iPhone 15 with powerful performance and excellent camera.",
        },
        {
            id: 2,
            title: "Samsung Galaxy S24",
            price: 74999,
            category: "Mobile",
            image: "https://picsum.photos/400/300?2",
            description:
                "Samsung Galaxy S24 with a beautiful AMOLED display.",
        },
        {
            id: 3,
            title: "Sony Headphones",
            price: 9999,
            category: "Audio",
            image: "https://picsum.photos/400/300?3",
            description:
                "Wireless headphones with high quality sound.",
        },
        {
            id: 4,
            title: "MacBook Air",
            price: 99999,
            category: "Laptop",
            image: "https://picsum.photos/400/300?4",
            description:
                "Lightweight laptop with excellent performance and battery life.",
        },
    ],
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
});

export default productSlice.reducer;
