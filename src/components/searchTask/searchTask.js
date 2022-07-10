import { useDispatch } from "react-redux";

import { ssearchTask } from "../../store/action-creators/todos";

function SearchTask() {

    const dispatch = useDispatch()

    return ( 
        <div className="w-25">
            <input onChange={(e)=>dispatch(ssearchTask(e.target.value))} type="text" className="input" placeholder="Поиск.."  />
        </div>
     );
}

export default SearchTask;