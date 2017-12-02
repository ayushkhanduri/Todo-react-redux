import React from 'react';

import './css/todo.css'

const TodoFormUI = ({value,changeValue,addTodo}) => (
    <form id="todoform" onSubmit={(e)=>addTodo(e)}>
        <input type="text" className="form-control" onChange={(e)=>changeValue(e.target.value)} value={value}/>
        <input type="submit" className="btn btn-primary" value="Add todo" /> 
    </form>
)

export default TodoFormUI;