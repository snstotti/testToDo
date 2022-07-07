import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { todoReducer } from "./todoReducer";




const rootReducer  = combineReducers({
    
    todo: todoReducer
})

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))




