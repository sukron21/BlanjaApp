import { combineReducers } from "redux";
import userReducer from "./user";
import chatReducer from "./chat";
import addressReducer from "./address";
import productReducer from "./product"
import orderReducer from "./order";
const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
    address: addressReducer,
    product: productReducer,
    order: orderReducer
});

export default rootReducer;