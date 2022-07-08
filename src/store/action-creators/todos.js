import { ADD_TASK, ADD_TASKS_ERROR, ADD_TASKS_SUCCESS, DELETE_TASK, DELETE_TASKS_ERROR, DELETE_TASKS_SUCCESS, EDIT_CONTENT, EDIT_TITLE, FETCH_TASKS, FETCH_TASKS_ERROR, FETCH_TASKS_SUCCESS, PUT_TASK, PUT_TASKS_ERROR, PUT_TASKS_SUCCESS, SORTING_CONTENT } from "../../types/tasks"


export const addTitleTask = (text) => {
    return { type: "CHANGE_TITLE", payload: text }
}
export const addContentTask = (text) => {
    return { type: "CHANGE_CONTENT", payload: text }
}
export const getTask = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_TASKS })
            const response = await fetch('http://localhost:3000/tasks')

            const data = await response.json()


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
            await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            })
            dispatch({ type: ADD_TASKS_SUCCESS })

        } catch (error) {
            dispatch({ type: ADD_TASKS_ERROR, payload: 'Произошла ошибка' })
        }
    }
}
export const removeTask = (id) => {

    return async (dispatch) => {
        try {
            dispatch({ type: DELETE_TASK })
            await fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: null
            })
            dispatch({ type: DELETE_TASKS_SUCCESS })

        } catch (error) {
            dispatch({ type: DELETE_TASKS_ERROR, payload: 'Произошла ошибка' })
        }
    }
}
export const putTask = (data) => {

    return async (dispatch) => {
        try {
            dispatch({ type: PUT_TASK })
            await fetch(`http://localhost:3000/tasks/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
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
            const response = await fetch('http://localhost:3000/tasks')

            const data = await response.json()

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
    // return { type: SORTING_CONTENT, payload: flag }
}

