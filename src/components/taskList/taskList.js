import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../../store/action-creators/todos";
import Spiner from "../spiner/spiner";
import Task from "./task";

function TaskList() {


    const taskList = useSelector((state) => {
        return state.tasks.tasks
    })
    const loading = useSelector((state) => {
        return state.tasks.loading
    })
    const onAdded = useSelector((state) => {
        return state.tasks.added
    })
    const onRemoval = useSelector((state) => {
        return state.tasks.onRemoval
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTask())
    }, [dispatch,onAdded,onRemoval])

    let list = taskList?.map(task => <Task key={task.id} data={task} />)

    if (loading) return <Spiner />

    return (
        <>
            {list}
        </>
    );
}

export default TaskList;