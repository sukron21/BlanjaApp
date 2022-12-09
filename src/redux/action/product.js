import axios from 'axios';

export const insertProduct = (body, handleSuccess) => ({
    type: "INSERT_PRODUCT",
    payload: new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/product`, body, 
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then((res) => {
            handleSuccess(res);
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})

export const getUserProduct = (id) => ({
    type: "GET_USER_PRODUCT",
    payload: new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/product/user/${id}`)
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})

export const deleteProduct = (id, handleSuccess) => ({
    type: "DELETE_PRODUCT",
    payload: new Promise((resolve, reject) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/product/${id}`)
        .then((res) => {
            handleSuccess(res)
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})

export const updateProduct = (id, body, handleSuccess) => ({
    type: "UPDATE_PRODUCT",
    payload: new Promise((resolve, reject) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/product/${id}`, body)
        .then((res) => {
            handleSuccess(res)
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})


export const getByIdProduct = (id, handleSuccess) => ({
    type: "GET_BYID_PRODUCT",
    payload: new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/product/${id}`)
        .then((res) => {
            handleSuccess(res);
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})

export const addProductImage = (id, body, handleSuccess) => ({
    type: "ADD_PRODUCT_IMAGE",
    payload: new Promise((resolve, reject) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/product/photo/${id}`, body, 
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then((res) => {
            handleSuccess(res);
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})
