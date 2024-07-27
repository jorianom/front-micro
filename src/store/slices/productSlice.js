import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        newProduct: (state, action) => {
            state.products.push(action.payload);
        },
    },
});


export const { setProducts, newProduct } = productSlice.actions;