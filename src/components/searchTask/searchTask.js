import { useDispatch, useSelector } from "react-redux";

import { ssearchTask } from "../../store/action-creators/todos";

function SearchTask() {

    // const searchFiled = useSelector(state=>{
    //     state.tasks.searchFiled
    // })
    const dispatch = useDispatch()

    return ( 
        <div className="w-25">
            <input onChange={(e)=>dispatch(ssearchTask(e.target.value))} type="text" className="form-control" placeholder="Search.."  />
        </div>
     );
}

export default SearchTask;