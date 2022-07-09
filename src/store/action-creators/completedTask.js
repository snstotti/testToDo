import TaskApi from "../../api/api"
import { COMPLETED_TASKS_SUCCESS, DELETE_TASK, DELETE_TASKS_ERROR, DELETE_TASKS_SUCCESS, FETCH_COMPLETED_TASKS, FETCH_COMPLETED_TASKS_ERROR, FETCH_COMPLETED_TASKS_SUCCESS } from "../../types/tasks"


const api = new TaskApi()

export const completedTask = (data) => {

    return async (dispatch) => {
        try {
            dispatch({ type: DELETE_TASK })
            await api.completedTask(data)
            dispatch({ type: DELETE_TASKS_SUCCESS })
            dispatch({ type: COMPLETED_TASKS_SUCCESS, payload: {status:true, id:data.id} })

        } catch (error) {
            dispatch({ type: DELETE_TASKS_ERROR, payload: 'Произошла ошибка' })
        }
    }
}

export const getTaskCompleted = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_COMPLETED_TASKS })
            
            const data = await api.getTaskCompleted()
            
            dispatch({ type: FETCH_COMPLETED_TASKS_SUCCESS, payload: data })

        } catch (error) {
            dispatch({ type: FETCH_COMPLETED_TASKS_ERROR, payload: 'Произошла ошибка' })
        }
    }
}