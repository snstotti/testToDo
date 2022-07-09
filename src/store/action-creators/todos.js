import { ADD_TASK, ADD_TASKS_ERROR, ADD_TASKS_SUCCESS, CHANGE_CONTENT, CHANGE_TITLE, EDIT_CONTENT, EDIT_TITLE, FETCH_TASKS, FETCH_TASKS_ERROR, FETCH_TASKS_SUCCESS, PUT_TASK, PUT_TASKS_ERROR, PUT_TASKS_SUCCESS } from "../../types/tasks"
import TaskApi from "../../api/api"

const api = new TaskApi()

export const addTitleTask = (text) => {
    return { type: CHANGE_TITLE, payload: text }
}
export const addContentTask = (text) => {
    return { type: CHANGE_CONTENT, payload: text }
}
export const getTask = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_TASKS })
            
            const data = await api.getTasks()
            
            dispatch({ type: FETCH_TASKS_SUCCESS, payload: data })

        } catch (error) {
            dispatch({ type: FETCH_TASKS_ERROR, payload: 'Произошла ошибка' })
        }
    }
}
export const addTask = (data) => {

    return async (dispatch) => {
        try {
            dispatch({ type: ADD_TASK })
            const curentDate = new Date().toLocaleDateString()
            const newTask = {
                title: data.title,
                content: data.content,
                createdate: curentDate,
                completionStatus: false
            }
            await api.postTask(newTask)
            
            dispatch({ type: ADD_TASKS_SUCCESS })

        } catch (error) {
            dispatch({ type: ADD_TASKS_ERROR, payload: 'Произошла ошибка' })
        }
    }
}
export const putTask = (data) => {

    return async (dispatch) => {
        try {
            dispatch({ type: PUT_TASK })
            
            await api.putTask(data)
            dispatch({ type: PUT_TASKS_SUCCESS })

        } catch (error) {
            dispatch({ type: PUT_TASKS_ERROR, payload: 'Произошла ошибка' })
        }
    }
}
export const editTaskTitle = (id, text) => {

    return { type: EDIT_TITLE, payload: { id, text } }
}
export const editTaskContent = (id, text) => {

    return { type: EDIT_CONTENT, payload: { id, text } }
}
export const sortingTask = (flag) => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_TASKS })
            const data = await api.getTasks()

            if(flag === "NEW"){
                const curentDate = new Date().toLocaleDateString()
                let newTask = data.filter(el=>el.createdate === curentDate)
                
                return dispatch({ type: FETCH_TASKS_SUCCESS, payload: newTask })
            }
            if(flag === "OLD"){
                const curentDate = new Date().toLocaleDateString()
                let newTask = data.filter(el=>el.createdate !== curentDate)
                
                return dispatch({ type: FETCH_TASKS_SUCCESS, payload: newTask })
            }
           
            return dispatch({ type: FETCH_TASKS_SUCCESS, payload: data })

            

        } catch (error) {
            dispatch({ type: FETCH_TASKS_ERROR, payload: 'Произошла ошибка' })
        }
    }
   
}
export const ssearchTask = (value) => {
    return async (dispatch) => {

        try {
            dispatch({ type: FETCH_TASKS })
            const data = await api.getTasks()

            const searchData = data.filter(task =>{
               return task.title.includes(value) || task.content.includes(value)
            });

            return dispatch({ type: FETCH_TASKS_SUCCESS, payload: searchData })

        } catch (error) {
            dispatch({ type: FETCH_TASKS_ERROR, payload: 'Произошла ошибка' })
        }
    }
   
}

