import TaskApi from "../../api/api"
import { DELETE_TASK, DELETE_TASKS_ERROR, DELETE_TASKS_SUCCESS, FETCH_DELETED_TASKS, FETCH_DELETED_TASKS_ERROR, FETCH_DELETED_TASKS_SUCCESS } from "../../types/tasks"


const api = new TaskApi()

export const deletedTask = (data) => {

    return async (dispatch) => {
        try {
            dispatch({ type: DELETE_TASK })
            await api.deletedTask(data)
            dispatch({ type: DELETE_TASKS_SUCCESS })
            // dispatch({ type: FETCH_COMPLETED_TASKS_SUCCESS, payload: {status:true, id:data.id} })

        } catch (error) {
            dispatch({ type: DELETE_TASKS_ERROR, payload: 'Произошла ошибка' })
        }
    }
}

export const getTasksDeleted = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_DELETED_TASKS })
            
            const data = await api.getTaskDeleted()
            
            dispatch({ type: FETCH_DELETED_TASKS_SUCCESS, payload: data })

        } catch (error) {
            dispatch({ type: FETCH_DELETED_TASKS_ERROR, payload: 'Произошла ошибка' })
        }
    }
}
// export const postTasksDeleted = () => {
//     return async (dispatch) => {
//         try {
//             dispatch({ type: FETCH_DELETED_TASKS })
            
//             const data = await api.getTaskDeleted()
            
//             dispatch({ type: FETCH_DELETED_TASKS_SUCCESS, payload: data })

//         } catch (error) {
//             dispatch({ type: FETCH_DELETED_TASKS_ERROR, payload: 'Произошла ошибка' })
//         }
//     }
// }