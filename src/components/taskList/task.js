import { useState } from "react";
import { useDispatch } from "react-redux";
import { completedTask } from "../../store/action-creators/completedTask";
import ContentInputEdit from "./contentInputEdit";
import EditInput from "./editInput";
import { deletedTask } from "../../store/action-creators/deletedTasks";

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
            className="card mx-auto w-50" style={{ width: "18rem" }}>

            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="form-check">
                        <input onChange={changeCompleted} className="form-check-input" type="checkbox" checked={data.completionStatus} id=""/>
                           
                    </div>
                    <EditInput data={data} flag={showBtnEdit} />
                    <div>
                        <small className="card-subtitle mb-2 text-muted ml-auto">{data.createdate}</small>
                        <button type="button" onClick={() => dispatch(deletedTask(data))} className={showBtnEdit ? "btn-close" : "d-none"} ></button>
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