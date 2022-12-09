const initialState = {
    address: [],
    isLoading: false,
    isError: false,
};

export default function addressReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_BY_MAIN_ADDRESS_PENDING":
        case "INSERT_ADDRESS_PENDING":
        case "UPDATE_ADDRESS_PENDING":
            return { ...state, isLoading: true }
        case "GET_BY_MAIN_ADDRESS_FULFILLED":
        case "INSERT_ADDRESS_FULFILLED":
        case "UPDATE_ADDRESS_FULFILLED":
            return { ...state, isLoading: false, address: action.payload.data.data, isError: false }
        case "GET_BY_MAIN_ADDRESS_REJECTED":
        case "INSERT_ADDRESS_REJECTED":
        case "UPDATE_ADDRESS_REJECTED":
            return { ...state, isLoading: false, isError: true }
        case "RESET_ADDRESS":
            return {
                ...state,
                isLoading: false,
                isError: false,
                address: [],
            }

        default:
            return state;
    }
}