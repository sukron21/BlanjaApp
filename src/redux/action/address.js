import axios from 'axios';

export const insertAddress = (body, handleSuccess) => ({
    type: "INSERT_ADDRESS",
    payload: new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/address`, body)
        .then((res) => {
            handleSuccess(res);
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})

export const updateAddress = (id, body, handleSuccess) => ({
    type: "UPDATE_ADDRESS",
    payload: new Promise((resolve, reject) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/address/update/${id}`, body)
        .then((res) => {
            handleSuccess(res);
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})

export const getUserAddresses = (id, handleSuccess) => ({
    type: "GET_USER_LIST_ADDRESSESS",
    payload: new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/address/user/${id}`)
        .then((res) => {
            handleSuccess(res)
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})
export const getByMainAddress = (id) => ({
    type: "GET_BY_MAIN_ADDRESS",
    payload: new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/address/${id}`)
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    }),
})

export const resetAddress = () => {
    return {
        type: "RESET_ADDRESS",
    }
}