// import axios from 'axios'
// import {Action, ActionCreator, Dispatch} from 'redux'

export const addTitleTask =(text)=>{
        return {type:"CHANGE_TITLE" , payload:text}
    }
export const addContentTask =(text)=>{
        return {type:"CHANGE_CONTENT" , payload:text}
    }

// export const fetchTodos =(page,limit)=>{
//     return async (dispatch)=>{
//         try {
//             dispatch({type:TodoActionTypes.FETCH_TODOS})
//             const response = await axios.get('https://jsonplaceholder.typicode.com/todos',{params:{_page:page,_limit:limit}})
//             setTimeout(()=>{
//                 dispatch({type:TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
//             } ,0)
           
//         } catch (error) {
//             dispatch({type:TodoActionTypes.FETCH_TODOS_ERROR, payload:'Произошла ошибка'})
//         }
//     }
// }

// export const setPageTodo =(page)=>{
//     return {type:TodoActionTypes.SET_PAGE_TODOS, payload:page}
// }
