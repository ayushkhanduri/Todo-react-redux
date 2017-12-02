import { combineReducers } from 'redux';

import { TodoReducer as Todo } from '../components/Todo/Todo.reducer';

export default combineReducers({Todo});
