import axios from "axios";

export const getOrderUser = (id) => ({
    type: "GET_ORDER_USER",
    payload: new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/order/user/${id}`)
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})

export const getOrderSeller = (id) => ({
    type: "GET_ORDER_SELLER",
    payload: new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/order/seller/${id}`)
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})

export const updateOrderUser = (id, body, handleSuccess) => ({
    type: "UPDATE_ORDER_USER",
    payload: new Promise((resolve, reject) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/order/${id}`,body)
        .then((res) => {
            handleSuccess(res)
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})

export const resetOrder = () => {
    return {
        type: "RESET_ORDER",
    }
}