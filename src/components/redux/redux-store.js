import { createStore,combineReducers} from "redux"
import {shopReducer} from "./shopReducer";
import {cartReducer} from "./cartReducer";
import {homepageReducer} from "./homepageReducer";
import {composeWithDevTools} from "@redux-devtools/extension"

const rootReducer = combineReducers({
    shopReducer,
    cartReducer,
    homepageReducer,
})

const store = createStore(rootReducer,composeWithDevTools())

export {store};