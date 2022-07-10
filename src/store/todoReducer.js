import { ADD_TASK, ADD_TASKS_ERROR, ADD_TASKS_SUCCESS, CHANGE_CONTENT, CHANGE_TITLE, EDIT_CONTENT, EDIT_TITLE, FETCH_TASKS, FETCH_TASKS_ERROR, FETCH_TASKS_SUCCESS, PUT_TASK, PUT_TASKS_ERROR, PUT_TASKS_SUCCESS, } from "../types/tasks"
import { taskState } from "./defaultState/defaultState"

export const todoReducer = (state = taskState, action)  => {

    switch (action.type) {
     
        case CHANGE_TITLE:
            return{...state, titleValue: action.payload}
        case CHANGE_CONTENT:
            return{...state, contentValue: action.payload}

        case EDIT_TITLE:
            const newList = state.tasks.map(el => {
                const { id, text } = action.payload
                if (el.id === id) {
                    el.title = text
                }
                return el
            })
            return { ...state, tasks: newList }

        case EDIT_CONTENT:
            const newListContent = state.tasks.map(el=>{
                const {id , text} = action.payload
                if(el.id === id){
                   el.content = text
                }
                return el
            })
            return{...state, tasks: newListContent}
            
        case FETCH_TASKS:
            return { ...state, loading: true }
        case FETCH_TASKS_SUCCESS:
            return { ...state, tasks: action.payload, loading: false }
        case FETCH_TASKS_ERROR:
            return { ...state, error: action.payload }

        case ADD_TASK:
            return { ...state, added: false }
        case ADD_TASKS_SUCCESS:
            return { ...state,  added: true, titleValue: "", contentValue: "" }
        case ADD_TASKS_ERROR:
            return { ...state,  error: action.payload }


        case PUT_TASK:
            return { ...state, onEdit: false }
        case PUT_TASKS_SUCCESS:
            return { ...state,  onEdit: true }
        case PUT_TASKS_ERROR:
            return { ...state,  error: action.payload }

        

        
        default:
            return state
    }
    
}

