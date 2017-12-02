import React from 'react';

import './css/filters.css';

const FilterUI= ({changeFilter}) => (
    <ul className="filters">
        <li onClick={(e)=>changeFilter("all")}> <a href="#all">All</a> </li> |
        <li onClick={(e)=>changeFilter(false)}> <a href="#completed">Completed</a> </li> |
        <li onClick={(e)=>changeFilter(true)}> <a href="#incomplete">Not Completed</a></li> 
    </ul>
);

export default FilterUI;