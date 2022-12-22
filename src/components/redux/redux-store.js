import { createStore,combineReducers} from "redux"
import {shopReducer} from "./shopReducer";

const rootReducer = combineReducers({
    shopReducer,
})

const store = createStore(rootReducer)

export {store};