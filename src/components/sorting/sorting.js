import { useDispatch } from "react-redux";
import { sortingTask } from "../../store/action-creators/todos";

function Sorting() {

    const dispatch = useDispatch()

    return (
        <div className="text-center">
            <div className="btn-group" role="group" >
            <button type="button" onClick={()=>dispatch(sortingTask('ALL'))} className="btn btn-outline-primary">Все</button>
            <button type="button" onClick={()=>dispatch(sortingTask('NEW'))} className="btn btn-outline-primary">Новые</button>
            <button type="button" onClick={()=>dispatch(sortingTask('OLD'))} className="btn btn-outline-primary">Старые</button>
        </div>
        </div>
        
    );
}

export default Sorting;