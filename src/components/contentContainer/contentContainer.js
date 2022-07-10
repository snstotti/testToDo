import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { getTaskCompleted } from "../../store/action-creators/completedTask";
import { getTasksDeleted } from "../../store/action-creators/deletedTasks";
import { getTask } from "../../store/action-creators/todos";
import RenderTasksList from "../reenderTasksList/ReenderTasksList";
import Main from "../main/Main";


function ContentContainer() {
 const location = useLocation()
    const onAdded = useSelector((state) => {
        return state.tasks.added
    })
    const onRemoval = useSelector((state) => {
        return state.deletedTasks.onRemoval
    })

    const listTaskDeleted = useSelector((state) => {
        return state.deletedTasks.deletedTasks
    })
    const loadingDel = useSelector((state) => {
        return state.deletedTasks.loading
    })
    const listTaskCompleted = useSelector((state) => {
        return state.completedTasks.copletedTasks
    })
    const loadingCompleted = useSelector((state) => {
        return state.completedTasks.loading
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if(location.pathname === "/deletedTask"){
            dispatch(getTasksDeleted())
        }
        if(location.pathname === "/completedTask"){
            dispatch(getTaskCompleted())
        }
        dispatch(getTask())
        
    }, [dispatch,location,onAdded,onRemoval])


    return (
        <>
            <Routes>
                <>
                    <Route path="/" element={<Main />} />
                    <Route path="/deletedTask" element={<RenderTasksList listTask={listTaskDeleted} flag={loadingDel} />} />
                    <Route path="/completedTask" element={<RenderTasksList listTask={listTaskCompleted} flag={loadingCompleted} />} />
                </>
            </Routes>
        </>
    );
}

export default ContentContainer;