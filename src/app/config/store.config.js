import { createStore , applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducer/index.reducer';

const middleWares = [
    createLogger(),
    thunkMiddleware
]

export default function configureStore({initialState}){
    const store = createStore(rootReducer,initialState,applyMiddleware(...middleWares));
    if(module.hot){
        module.hot.accept('../reducer/index.reducer',()=>{
            const nextReducer = require('../reducer/index.reducer').default;
            store.replaceReducer(nextReducer);
        })
    }
    return store;
}