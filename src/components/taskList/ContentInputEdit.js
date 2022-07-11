import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTaskContent, putTask } from "../../store/action-creators/todos";

function ContentInputEdit({data, flag}) {

    const [showInputEdit, setshowInputEdit] = useState(false)
    
    const dispatch = useDispatch()

    const closeAndSaveBtn=()=>{
        dispatch(putTask(data))
        setshowInputEdit(false)
       }

    return ( 
        <>
            <p className={!showInputEdit ? "" : "d-none"}>
                {data.content} 
                <button type="button" onClick={()=>setshowInputEdit(true)} className={flag ? "btn" : "d-none"} >Edit</button>
            </p>
            <div className={showInputEdit ? "d-flex" : "d-none"}>
                <input className="input w-75"  onChange={(e)=>dispatch(editTaskContent(data.id,e.target.value))} value={data.content} type="text" placeholder=""  />
                <button type="button"  onClick={closeAndSaveBtn} className="btn"  >Save</button>
            </div>
            
        </>
        
     );
}

export default ContentInputEdit;