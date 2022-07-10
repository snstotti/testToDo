import { useDispatch } from "react-redux";
import { sortingTask } from "../../store/action-creators/todos";

function Sorting() {

    const dispatch = useDispatch()

    return (
        <div className="" >
            <button type="button" onClick={() => dispatch(sortingTask('ALL'))} className="btn">Все</button>
            <button type="button" onClick={() => dispatch(sortingTask('NEW'))} className="btn">Новые</button>
            <button type="button" onClick={() => dispatch(sortingTask('OLD'))} className="btn">Старые</button>
        </div>

    );
}

export default Sorting;