import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../../store/action-creators/todos";
import ContentInputEdit from "./contentInputEdit";
import EditInput from "./editInput";

function Task({data}) {

    const [showBtnEdit, setShowBtnEdit] = useState(false)
    const [showBtnContent, setShowBtnContent] = useState(false)
    const dispatch = useDispatch()

    return (
        <div 
            onMouseOver={()=>setShowBtnEdit(true)}
            onMouseOut={()=>setShowBtnEdit(false)}
            className="card mx-auto w-50" style={{ width: "18rem" }}>
            
            <div className="card-body">
                <div className="d-flex justify-content-between">
                <EditInput data={data} flag={showBtnEdit} />
                    <div>
                        <small className="card-subtitle mb-2 text-muted ml-auto">{data.createdate}</small>
                        <button type="button" onClick={()=>dispatch(removeTask(data.id))} className={showBtnEdit ? "btn-close" : "d-none"} ></button>
                    </div>


                    
                </div>
                <div>
                {/* <p className="card-text">{data.content}</p> */}
                <ContentInputEdit data={data} flag={showBtnEdit} />
                </div>
                
            </div>
        </div>
    );
}

export default Task;