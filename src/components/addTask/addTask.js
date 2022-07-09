import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addContentTask, addTask, addTitleTask } from '../../store/action-creators/todos';

function AddTask() {

    const dispatch = useDispatch()
    const titleValue = useSelector((state)=>{
        return state.tasks.titleValue
    })
    const contentValue = useSelector((state)=>{
        return state.tasks.contentValue
    })

    const newTaskData = {
        title: titleValue,
        content: contentValue,
       
    }

    return (
        <div className="w-100 d-flex ">
            <div  className="">
                <button type="button" onClick={()=>dispatch(addTask(newTaskData))} className="btn btn-primary">Добавить задачу</button>
                
            </div>
            <div className="mb-3 w-75">
                    <input type="text" onChange={(e)=>dispatch(addTitleTask(e.target.value))} value={titleValue} className="form-control" id="" placeholder=""/>
                    <input type="text" onChange={(e)=>dispatch(addContentTask(e.target.value))} value={contentValue} className="form-control" id="" placeholder=""/>
                </div>
        </div>
    )
}

export default AddTask;