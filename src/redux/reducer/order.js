const initialState = {
  order: [],
  isLoading: false,
  isError: false,
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ORDER_USER_PENDING":
      return { ...state, isLoading: true };
    case "GET_ORDER_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        order: action.payload.data.data,
        isError: false,
      };
    case "GET_ORDER_USER_REJECTED":
      return { ...state, isLoading: false, isError: true };
    case "GET_ORDER_SELLER_PENDING":
      return { ...state, isLoading: true };
    case "GET_ORDER_SELLER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        order: action.payload.data.data,
        isError: false,
      };
    case "GET_ORDER_SELLER_REJECTED":
      return { ...state, isLoading: false, isError: true };
    case "RESET_ORDER":
      return {
        ...state,
        isLoading: false,
        isError: false,
        order: [],
      };

    default:
      return state;
  }
}
