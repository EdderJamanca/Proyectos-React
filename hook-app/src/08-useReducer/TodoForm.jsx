import {useForm} from './../hooks/useForm'

export const TodoForm=({onNewTodo})=>{

    const {formState,onInputChange,resetOnForm,descripcion}=useForm({
        descripcion:''
    })

    const onFormSubmit=(event)=>{
        event.preventDefault();
        if(descripcion.length <=1) return;

        const newTodo={
            id:new Date().getTime(),
            done:false,
            descripcion:descripcion
        }
        onNewTodo(newTodo);

        resetOnForm();
    }

    return (
        <>
            <form onSubmit={onFormSubmit}
            action="">
                <input 
                    type="text"
                    className="form-control mb-3"
                    name='descripcion'
                    value={descripcion}
                    onChange={onInputChange}
                    placeholder="¿Qué hay que hacer?" 
                        />
               <button
                   type='submit'
                   className="btn btn-primary"
                >
                            Agregar
                </button>
            </form>
        </>
    )
}