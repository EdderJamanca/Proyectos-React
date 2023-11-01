import { TodoItem } from "./TodoItem"


export const TodoList=({todos=[],removeTodo,onToggleTodo})=>{


    return (
        <>
                <ul className="list-group">
                    {
                        todos.map(res=>(

                            <TodoItem 
                                keys={res.id} 
                                todo={res} 
                                removeTodo={removeTodo}
                                onToggleTodo={onToggleTodo}
                            />
                        ))
                    }
                </ul>
        </>
    )
}