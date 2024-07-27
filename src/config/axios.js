import axios from 'axios';
const apiProducts = process.env.REACT_APP_URL_MICRO_NODEJS;
const apiCategory = process.env.REACT_APP_URL_MICRO_PYTHON;

export const productApi = axios.create({
    baseURL: apiProducts ? apiProducts : 'http://localhost:3000/api/products',
});
export const categoryApi = axios.create({
    baseURL: apiCategory ? apiCategory : 'http://localhost:5000/api/categories',
});