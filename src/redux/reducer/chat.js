const initialState = {
    chat: [],
    receiver: [],
    isLoading: false,
    isError: false,
};

export default function chatReducer(state = initialState, action){
    switch(action.type){
        case "SET":
            return { ...state, isLoading: false, isError: false, chat: action.payload };
        case "RESET":
            return { ...state, isLoading: false, isError: false, chat: [], receiver: [] };
        case "FETCH_CHAT_LIST_PENDING":
        case "SELECT_RECEIVER_PENDING":
            return { ...state, isLoading: true, isError: false };
        case "FETCH_CHAT_LIST_REJECTED":
        case "SELECT_RECEIVER_REJECTED":
            return { ...state, isLoading: false, isError: true };
        case "SELECT_RECEIVER_FULFILLED":
            return { ...state, isLoading: false, isError: false, receiver: action.payload.data.data.rows[0] };
        default:
            return state;
    }
}