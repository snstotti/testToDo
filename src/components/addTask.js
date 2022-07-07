import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addContentTask, addTitleTask } from '../store/action-creators/todos';

function AddTask() {

    const dispatch = useDispatch()
    const titleValue = useSelector((state)=>{
        return state.titleValue
    })
    const contentValue = useSelector((state)=>{
        return state.contentValue
    })

    return (
        <div className="w-100 d-flex">
            <div  className="">
                <button type="button" className="btn btn-primary">Primary</button>
                
            </div>
            <div className="mb-3 w-100">
                    <input type="text" onChange={(e)=>dispatch(addTitleTask(e.target.value))} value={titleValue} className="form-control" id="" placeholder=""/>
                    <input type="text" onChange={(e)=>dispatch(addContentTask(e.target.value))} value={contentValue} className="form-control" id="" placeholder=""/>
                </div>
        </div>
    )
}

export default AddTask;