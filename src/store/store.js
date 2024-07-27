import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './slices/productSlice';
import { categorySlice } from './slices/categorySlice';

export const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        categories: categorySlice.reducer,
    },
});