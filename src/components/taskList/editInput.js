import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { editTaskTitle, putTask } from "../../store/action-creators/todos";

function EditInput({data, flag}) {

    const [showInputEdit, setshowInputEdit] = useState(false)
    
    const dispatch = useDispatch()

   

    return ( 
        <>
            <h5 className={!showInputEdit ? "card-title" : "d-none"}>
                {data.title} 
                <button type="button" onClick={()=>setshowInputEdit(true)} className={flag ? "btn btn-outline-primary btn-sm" : "d-none"} >Edit</button>
            </h5>
            <div className={showInputEdit ? "d-flex" : "d-none"}>
                <input className="form-control w-75"  onChange={(e)=>dispatch(editTaskTitle(data.id,e.target.value))} value={data.title} type="text" placeholder=""  />
                <button type="button"  onClick={()=>dispatch(putTask(data))} className="btn btn-outline-primary btn-sm"  >Save</button>
                <button type="button" onClick={()=>setshowInputEdit(false)} className="btn btn-outline-primary btn-sm"  >Close</button>
            </div>
            
        </>
        
     );
}

export default EditInput;