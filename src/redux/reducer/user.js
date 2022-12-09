const initialState = {
    user: [],
    isLoading: false,
    isError: false,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_PENDING":
        case "REGISTER_PENDING":
        case "CHECK_EMAIL_PENDING":
        case "UPDATE_CUST_BYID_PENDING":
        case "UPDATE_SELLER_BYID_PENDING":
            return { ...state, isLoading: true, isError: false };
        case "LOGIN_REJECTED":
        case "REGISTER_REJECTED":
        case "CHECK_EMAIL_REJECTED":
        case "UPDATE_CUST_BYID_REJECTED":
        case "UPDATE_SELLER_BYID_REJECTED":
            return { ...state, isLoading: false, isError: true };
        case "UPDATE_CUST_BYID_FULFILLED":
        case "UPDATE_SELLER_BYID_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                user: action.payload.data.data[0],
            };
        case "LOGIN_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                user: action.payload.data.data,
            };
        case "RESET_USER":
            return {
                ...state,
                isLoading: false,
                isError: false,
                user: [],
            }

        default:
            return state;
    }
}