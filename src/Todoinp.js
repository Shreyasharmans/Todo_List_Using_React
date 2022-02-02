import React,{useState} from 'react';
import './todo.css';
const Todoinp = ({tasks,handleSubmit}) => {
    const [name, setName] = useState("");
    const handleChange= (event) =>{
        tasks.name=event.target.value;
        setName(event.target.value);

    }
    const handleSubmithelper= (event) => {
        handleSubmit(event);
        setName("");
 
    }
    return( 
    <div className='entering'>
        
         <label>
          Add Todo :
          </label>
          <input type="text" value={name} placeholder="Add new todo" id="inp" onChange={handleChange} />
        
       <button id="bt" onClick={handleSubmithelper}>Add</button>
    </div>
    );

}
export default Todoinp;