import React, {useState} from 'react';
import './todo.css';

import Todolist from './Todolist';

const App=()=>{
   
    return(
      
        <header className="App-header">
        <div><h1 className="head">Todo List</h1>
        <div className='Box'>        
        <Todolist  id={1}/>
        </div>
        </div>
        </header>
    
         );
         //mutiple files export in app.js
            
}
export default App;


















