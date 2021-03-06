import {  useSelector } from "react-redux";
import Spiner from "../spiner/Spiner";
import Task from "./Task";

function TaskList() {


    const taskList = useSelector((state) => {
        return state.tasks.tasks
    })
    const loading = useSelector((state) => {
        return state.tasks.loading
    })
    

    let list = taskList?.map(task => <Task key={task.id} data={task} />)

    if (loading) return <Spiner />

    return (
        <>
            {list}
        </>
    );
}

export default TaskList;