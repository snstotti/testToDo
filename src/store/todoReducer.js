const CHANGE_TITLE = "ADD_TITLE"
const CHANGE_CONTENT = "ADD_CONTENT"

const defaultState = {
    todos: [],
    titleValue: "",
    contentValue: "",
}



export const todoReducer = (state = defaultState, action)  => {

    switch (action.type) {
     
        case CHANGE_TITLE:
           
            return{...state, valueInput: action.payload}

       
        default:
            return state
    }

}

