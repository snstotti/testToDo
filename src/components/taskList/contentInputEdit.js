import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTaskContent, putTask } from "../../store/action-creators/todos";

function ContentInputEdit({data, flag}) {

    const [showInputEdit, setshowInputEdit] = useState(false)
    
    const dispatch = useDispatch()

   

    return ( 
        <>
            <p className={!showInputEdit ? "card-text" : "d-none"}>
                {data.content} 
                <button type="button" onClick={()=>setshowInputEdit(true)} className={flag ? "btn btn-outline-primary btn-sm" : "d-none"} >Edit</button>
            </p>
            <div className={showInputEdit ? "d-flex" : "d-none"}>
                <input className="form-control w-75"  onChange={(e)=>dispatch(editTaskContent(data.id,e.target.value))} value={data.content} type="text" placeholder=""  />
                <button type="button"  onClick={()=>dispatch(putTask(data))} className="btn btn-outline-primary btn-sm"  >Save</button>
                <button type="button" onClick={()=>setshowInputEdit(false)} className="btn btn-outline-primary btn-sm"  >Close</button>
            </div>
            
        </>
        
     );
}

export default ContentInputEdit;