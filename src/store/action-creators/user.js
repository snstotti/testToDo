import axios from 'axios'
import {Action, ActionCreator, Dispatch} from 'redux'
import { CustomerAction, CustomerActionTypes } from '../../types/customer'

// export const fetchUsers =()=>{
//     return async (dispatch)=>{
//         try {
//             dispatch({type:CustomerActionTypes.FETCH_USERS})
//             const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//             setTimeout(()=>{
//                 dispatch({type:CustomerActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
//             } ,500)
           
//         } catch (error) {
//             dispatch({type:CustomerActionTypes.FETCH_USERS_ERROR, payload:'Произошла ошибка'})
//         }
//     }
// }

