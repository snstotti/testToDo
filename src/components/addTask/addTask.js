import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addContentTask, addTask, addTitleTask } from '../../store/action-creators/todos';
import "./AddTask.css"

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
    // const validateText = ()=>{
    //     if()
    // }

    const condition = !titleValue || !contentValue 
    const textBtn = condition ? "Поля не заполнены" : "Добавить задачу"

    return (
        <div className="add-task">
            <div  className="">
                <button disabled={condition} type="button" onClick={()=>dispatch(addTask(newTaskData))} className="btn">{textBtn}</button>
                
            </div>
            <div className="input-block">
                    <input type="text" onChange={(e)=>dispatch(addTitleTask(e.target.value))} value={titleValue} className="input" id="" placeholder="Название Задачи"/>
                    <input type="text" onChange={(e)=>dispatch(addContentTask(e.target.value))} value={contentValue} className="input" id="" placeholder="Описание задачи"/>
                </div>
        </div>
    )
}

export default AddTask;