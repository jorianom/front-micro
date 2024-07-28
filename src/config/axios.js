import axios from 'axios';
const apiProducts = import.meta.env.VITE_URL_MICRO_NODEJS;
const apiCategory = import.meta.env.VITE_URL_MICRO_PYTHON;

export const productApi = axios.create({
    baseURL: apiProducts ? apiProducts : 'http://localhost:3000/api/products',
});
export const categoryApi = axios.create({
    baseURL: apiCategory ? apiCategory : 'http://localhost:5000/api/categories',
});