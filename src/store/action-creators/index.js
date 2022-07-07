import * as UserActionCreators from "./user";
import * as TodosActionCreators from "./todos";


export default {
    ...UserActionCreators,
    ...TodosActionCreators
   
}