import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTaskTitle, putTask } from "../../store/action-creators/todos";

function EditInput({data, flag}) {

    const [showInputEdit, setshowInputEdit] = useState(false)
    
    const dispatch = useDispatch()

   const closeAndSaveBtn=()=>{
    dispatch(putTask(data))
    setshowInputEdit(false)
   }

    return ( 
        <>
            <h5 className={!showInputEdit ? "card__title" : "d-none"}>
                {data.title} 
                <button type="button" onClick={()=>setshowInputEdit(true)} className={flag ? "btn" : "d-none"} >Edit</button>
            </h5>
            <div className={showInputEdit ? "d-flex" : "d-none"}>
                <input className="input w-75"  onChange={(e)=>dispatch(editTaskTitle(data.id,e.target.value))} value={data.title} type="text" placeholder=""  />
                <button type="button"  onClick={closeAndSaveBtn} className="btn"  >Save</button>
            </div>
            
        </>
        
     );
}

export default EditInput;