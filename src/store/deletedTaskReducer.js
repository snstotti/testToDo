import { DELETE_TASK, DELETE_TASKS_ERROR, DELETE_TASKS_SUCCESS, FETCH_DELETED_TASKS, FETCH_DELETED_TASKS_ERROR, FETCH_DELETED_TASKS_SUCCESS } from "../types/tasks"
import { deletetedTaskState } from "./defaultState/defaultState"

export const deletedTaskReducer = (state = deletetedTaskState, action)  => {

    switch (action.type) {
     
        case FETCH_DELETED_TASKS:
            return { ...state, loading: true }
        case FETCH_DELETED_TASKS_SUCCESS:
            return { ...state, deletedTasks: action.payload, loading: false }
        case FETCH_DELETED_TASKS_ERROR:
            return { ...state, error: action.payload }

             case DELETE_TASK:
            return { ...state, onRemoval: false }
        case DELETE_TASKS_SUCCESS:
            return { ...state,  onRemoval: true }
        case DELETE_TASKS_ERROR:
            return { ...state,  error: action.payload }
        
        default:
            return state
    }
    
}

