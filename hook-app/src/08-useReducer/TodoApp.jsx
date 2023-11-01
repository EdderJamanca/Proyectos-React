import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { useEffect } from "react";

let initialState=[];
let init=()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const TodoApp =()=>{

    const [todos,dispatchTodo]=useReducer(todoReducer,initialState,init);

    const onNewTodo=(todo)=>{
        console.log('todos los lados',todo);
        dispatchTodo({
            type:'[TODO] Add Todo',
            payload:todo
        })
    }

    const removeTodo=(id)=>{
        // console.log('eliminando el id',id);
        dispatchTodo({
            type:'[TODO] remove Todo',
            payload:id
        })
    }

    const onToggleTodo=(id)=>{
        dispatchTodo({
            type:'[TODO] toggle Todo',
            payload:id
        })
    }

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])


    return (
    <>
       <div className="container">
                <h1>Todo App</h1>
                <hr />
        <div className="row">
            <div className="col-5 col-lg-5">
                <TodoList 
                        todos={todos} 
                        removeTodo={removeTodo}
                        onToggleTodo={onToggleTodo} 
                />
            </div>
            <div className="col-5 col-lg-5">
                    <h1>Agregar TOD</h1>
                    <hr/>
                    <TodoForm 
                        onNewTodo={onNewTodo}
                        
                    />
 
            </div>
        </div>

       </div>

    </>
    );
}