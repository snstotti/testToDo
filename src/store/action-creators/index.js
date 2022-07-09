import * as TodosActionCreators from "./todos";
import * as CompletedTasksActionCreators from "./completedTask";
import * as DeletedTaskActionCreators from "./deletedTasks";


export default {
    ...CompletedTasksActionCreators,
    ...DeletedTaskActionCreators,
    ...TodosActionCreators
}