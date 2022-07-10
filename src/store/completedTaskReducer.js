import { FETCH_COMPLETED_TASKS, FETCH_COMPLETED_TASKS_ERROR, FETCH_COMPLETED_TASKS_SUCCESS } from "../types/tasks"
import { completedTask } from "./defaultState/defaultState"

export const completedTaskReducer = (state = completedTask, action)  => {

    switch (action.type) {
     
        case FETCH_COMPLETED_TASKS:
            return { ...state, loading: true }
        case FETCH_COMPLETED_TASKS_SUCCESS:
            return { ...state, copletedTasks: action.payload, loading: false }
        case FETCH_COMPLETED_TASKS_ERROR:
            return { ...state, error: action.payload }

        default:
            return state
    }
    
}

