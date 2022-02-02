import React, {useState} from 'react';
import './todo.css';
const Todo = ({task,updateTask,tasks}) => {
    // const[state, setState] = useState({
    //     taskId:task.id,
    //     taskName:task.name,
    //     taskStatus:task.taskstatus,
    //     // cls:"nonstroke"
    // }
    // );
    const[edit,setEdit] = useState("undo_edit");
    const handleEdit = (event) => {
        event.preventDefault();
        task.taskStatus=!task.taskStatus;
        if(task.taskStatus){
            setEdit("to_edit");
        }
        else{
            setEdit("undo_edit");
        }
    }
    const handleRemove = (event) => {
        event.preventDefault();
        updateTask(tasks.filter(del => del.id !== task.id));
        console.log("Removed");
    };
    return(
        <center>
        <div id="inoneline">
            {/* <h1 className={state.cls}>{state.taskName}</h1> */}
            <h1 className={edit}>{task.name}</h1>
            <div className='righ'>
            <button id="bt" onClick={handleEdit}>Edit</button>
            <button id="bt" onClick={handleRemove}>Remove</button>
            </div>
        </div>
        </center>
    );
};
export default Todo;