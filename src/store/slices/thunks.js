import { categoryApi, productApi } from "../../config/axios";
import { setCategories } from "./categorySlice";
import { newProduct, setProducts } from "./productSlice";


export const getProducts = () => {
    return async (dispatch) => {
        try {
            const response = await productApi.get();
            const { products } = response.data;
            dispatch(setProducts(products));
        } catch (error) {
            console.log(error);
        }
    };
}

export const postProduct = (product) => {
    return async (dispatch) => {
        try {
            const response = await productApi.post('', product);
            const { status } = response;
            if (status !== 200) {
                console.log("Error al crear producto");
                return
            }
            dispatch(newProduct(product));
        } catch (error) {
            console.log(error);
        }
    };
}

export const putProduct = (product, id) => {
    return async (dispatch) => {
        try {
            const response = await productApi.put(`/${id}`, product);
            const { status } = response;
            if (status !== 200) {
                console.log("Error al actualizar producto");
                return
            }
            dispatch(getProducts());
        } catch (error) {
            console.log(error);
        }
    };
}

export const deleteProduct = (id) => {
    return async (dispatch) => {
        try {
            const response = await productApi.delete(`/${id}`);
            const { status } = response;
            if (status !== 200) {
                console.log("Error al eliminar producto");
                return
            }
            dispatch(getProducts());
        } catch (error) {
            console.log(error);
        }
    };
}


export const getCategories = () => {
    return async (dispatch) => {
        try {
            const response = await categoryApi.get();
            const { data } = response;
            dispatch(setCategories(data));
        } catch (error) {
            console.log(error);
        }
    };
}

export const postCategory = (category) => {
    return async (dispatch) => {
        try {
            const response = await categoryApi.post('', category);
            console.log(response);
            const { status } = response;
            if (status !== 201) {
                console.log("Error al crear categoria");
                return
            }
            dispatch(getCategories());
        } catch (error) {
            console.log(error);
        }
    };
}

export const putCategory = (category, id) => {
    return async (dispatch) => {
        try {
            const response = await categoryApi.put(`/${id}`, category);
            const { status } = response;
            if (status !== 200) {
                console.log("Error al actualizar categoria");
                return
            }
            dispatch(getCategories());
        } catch (error) {
            console.log(error);
        }
    };
}

export const deleteCategory = (id) => {
    return async (dispatch) => {
        try {
            const response = await categoryApi.delete(`/${id}`);
            const { status } = response;
            if (status !== 200) {
                console.log("Error al eliminar categoria");
                return
            }
            dispatch(getCategories());
        } catch (error) {
            console.log(error);
        }
    };
}