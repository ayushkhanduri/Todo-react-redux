import React from 'react';
import './css/listui.css';

const ListUI = ({list,statusChanged,filter,deleteItem}) => (
    <div id="allTodos">
        {   list.map(item => {
            if (item.completed !== filter)
        return (<div className="item" key={item.id}> <label className={(item.completed ? "lineThrough" : "")} ><input defaultChecked={item.completed} onChange={(event)=>statusChanged(event,item.id)}
        type="checkbox"/>&nbsp;&nbsp;{item.task}</label> <button className="btn btn-danger" onClick={(e)=>deleteItem(item.id)}>X</button></div>);
            })
        }
    </div>
);

export default ListUI

