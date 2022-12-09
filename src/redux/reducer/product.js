const initialState = {
    product: [],
    isLoading: true,
    isError: false,
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case "INSERT_PRODUCT_PENDING":
            return { ...state, isLoading: true }
        case "INSERT_PRODUCT_FULFILLED":
            return { ...state, isLoading: false, isError: false }
        case "INSERT_PRODUCT_REJECTED":
            return { ...state, isLoading: false, isError: true }
        case "GET_PRODUCT_BYID_PENDING":
            return { ...state, isLoading: true }
        case "GET_PRODUCT_BYID_FULFILLED":
            return { ...state, isLoading: false, product: action.payload.data.data, isError: false }
        case "GET_PRODUCT_BYID_REJECTED":
            return { ...state, isLoading: false, isError: true }
        case "GET_USER_PRODUCT_PENDING":
            return { ...state, isLoading: true }
        case "GET_USER_PRODUCT_FULFILLED":
            return { ...state, isLoading: false, product: action.payload.data.data, isError: false }
        case "GET_USER_PRODUCT_REJECTED":
            return { ...state, isLoading: false, isError: true }
        case "RESET_PRODUCT":
            return {
                ...state,
                isLoading: false,
                isError: false,
                product: [],
            }

        default:
            return state;
    }
}