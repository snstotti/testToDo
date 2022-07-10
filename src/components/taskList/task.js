import { useState } from "react";
import { useDispatch } from "react-redux";
import { completedTask } from "../../store/action-creators/completedTask";
import ContentInputEdit from "./ContentInputEdit";
import EditInput from "./EditInput";
import { deletedTask } from "../../store/action-creators/deletedTasks";
import "../../style/Task.css"

function Task({ data }) {

    const [showBtnEdit, setShowBtnEdit] = useState(false)
    const dispatch = useDispatch()
    

    const changeCompleted=(e)=>{
        let check = e.target.checked
        if(check) dispatch(completedTask(data))
        
    }

    return (
        <div
            onMouseOver={() => setShowBtnEdit(true)}
            onMouseOut={() => setShowBtnEdit(false)}
            className="card w-50">

            <div className="card__block w-100">
                <div className="card__content">
                    <div className="">
                        <input onChange={changeCompleted} className="" type="checkbox" checked={data.completionStatus} id=""/>
                           
                    </div>
                    <EditInput data={data} flag={showBtnEdit} />
                    <div className="card__subtitle">
                        <small className="text-muted">{data.createdate}</small>
                        <button type="button" onClick={() => dispatch(deletedTask(data))} className="btn-close" ></button>
                    </div>

                </div>
                <div>
                    <ContentInputEdit data={data} flag={showBtnEdit} />
                </div>

            </div>
        </div>
    );
}

export default Task;