

export const todoReducer=(initialState=[],action)=>{

    switch(action.type){
        case '[TODO] Add Todo':
            // throw new Error('Action.type=ABC no esta implementada');
            return [...initialState,action.payload]
        case '[TODO] remove Todo':
            return initialState.filter(res=>res.id !=action.payload);
        case '[TODO] toggle Todo':
            return initialState.map(todo=>{
                    if(todo.id==action.payload){
                       return{...todo,done:!todo.done}
                    }
                return todo;
            })
        default:
            return initialState; 
    }
}