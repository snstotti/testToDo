import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { completedTaskReducer } from "./completedTaskReducer";
import { deletedTaskReducer } from "./deletedTaskReducer";
import { todoReducer } from "./todoReducer";




const rootReducer  = combineReducers({
    completedTasks: completedTaskReducer,
    deletedTasks: deletedTaskReducer,
    tasks: todoReducer
})

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))




