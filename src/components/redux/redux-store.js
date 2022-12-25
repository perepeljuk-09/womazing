import { createStore,combineReducers} from "redux"
import {shopReducer} from "./shopReducer";
import {cartReducer} from "./cartReducer";
import {composeWithDevTools} from "@redux-devtools/extension"

const rootReducer = combineReducers({
    shopReducer,
    cartReducer,
})

const store = createStore(rootReducer,composeWithDevTools())

export {store};