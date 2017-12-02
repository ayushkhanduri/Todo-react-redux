import React from 'react';

import {ChangeFilter} from './Todo.actionCreator';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


import FilterUI from '../../presentational/Todo/FiltersUI';

class FiltersComponent extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <FilterUI changeFilter={this.changeFilter.bind(this)}/>
        );
    }

    changeFilter(filter){
        let filteredData = this.props.todolist.slice();        
        if(Number(filter)){
            filteredData = filteredData.filter(item => item.completed);
        }
        ChangeFilter(filter);
        this.props.changeDS(filteredData);
    }
}
const mapStateToProps = ({Todo}) => (
    {
        filter: Todo.filter
    }
)

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        ChangeFilter
    },dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(FiltersComponent);