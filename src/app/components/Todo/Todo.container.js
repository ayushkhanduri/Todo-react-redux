import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {AddTodo ,ChangeStatus,ChangeFilter,DeleteItem} from './Todo.actionCreator';

import ListUI from '../../presentational/Todo/ListUI';
import TodoFormUI from '../../presentational/Todo/TodoFormUI';

import FilterUI from '../../presentational/Todo/FiltersUI';

import './css/container.css';

class TodoContainer extends React.Component {
    
    constructor(){
        super();
        this.state = {
            value: "",
        }
    }

    render() {
        const {List,filter,ChangeFilter,DeleteItem} = this.props;
        return(
            <div className="container">
                <h1 className="center"> Todo Application</h1>
                <div className="application">
                    <FilterUI changeFilter={(filter)=>ChangeFilter(filter)}/>
                    <TodoFormUI value={this.state.value} changeValue={this.changeValue.bind(this)}
                    addTodo={this.addTodo.bind(this)}/>
                    <ListUI filter={filter} list={List} statusChanged={this.statusChanged.bind(this)} 
                    deleteItem ={(itemId)=>DeleteItem(itemId)}/>
                </div>
            </div>
        )
    }

    addTodo(e){
        e.preventDefault();
        if(!this.state.value.trim()){
            alert("Please enter a value ! ");
            return; 
        }
        const {AddTodo,List} = this.props;
        let obj = {
            id: (List.length) ? List[List.length-1].id+1: 1,
            task: this.state.value,
            completed: false
        }
        //dispatch
        AddTodo(obj);
        this.setState({
            value: ""
        });
    }

    changeValue(value){
        this.setState({
            value: value
        })
    }

    statusChanged(e,id){
        const { ChangeStatus } = this.props;
        ChangeStatus(id);
    }

}

const mapStateToProps = ({Todo}) => (
    {
        List: Todo.List,
        filter: Todo.filter
    }
)

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        AddTodo,
        ChangeStatus,
        ChangeFilter,
        DeleteItem
    },dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(TodoContainer);