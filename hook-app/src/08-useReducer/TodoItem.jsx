 

 export const TodoItem=({todo,removeTodo,onToggleTodo})=>{

    const {id,descripcion,done}=todo;

    return (
        <>
         <li
            className="list-group-item d-flex justify-content-between">
            <span 
            className={`align-self-center ${done && 'text-decoration-line-through'}`}
            onClick={()=> onToggleTodo(id)}
            >{descripcion}
            </span>
            <button 
                    className="btn btn-danger"
                    onClick={()=>removeTodo(id)}
            >Borrar
            </button> 

        </li>  
        </>
    );
 }