import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cartItems");

const initialState = {
    items: savedCart ? JSON.parse(savedCart) : [],
}

const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addToCart: function (state, action) {
            const product = action.payload;
            const item = state.items.find(i => i.id === product.id);

            if (item) {
                item.qty += 1;
            } else {
                state.items.push({ ...product, qty: 1});
            }
        },

        removeFromCart: function (state, action) {
            state.items = state.items.filter(i => i.id !== action.payload);
        },

        updateQty: function (state, action) {
            const { id, qty } = action.payload;
            const item = state.items.find(i => i.id === id);
            if (item) {
                item.qty = qty;
            }
        },
    },
})

export const { addToCart, removeFromCart, updateQty } = cartSlice.actions;
export default cartSlice.reducer;