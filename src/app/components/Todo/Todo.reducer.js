export const TodoReducer = (state={},action)=>{
    console.log(state);
    switch(action.type){
        case "ADD_ITEM": return {
            ...state,
            List: [
                ...state.List,
                action.item
            ]
        }
        case "CHANGE_STATUS": return {
            ...state,
            List: state.List.map(item=>{
                if(item.id === action.key)
                    item.completed = !item.completed
                return item;
            })
        }
        case "CHANGE_FILTER": return {
            ...state,
            filter: action.filter
        }

        case "DELETE_ITEM": return {
            ...state,
            List: state.List.filter(item=> item.id !== action.itemId)
        }
        default: return state;
    }
}