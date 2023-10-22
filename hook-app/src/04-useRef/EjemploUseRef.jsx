import { useRef } from "react"



export const EjemploUseRef=()=>{

       const inputRef=useRef();

       const onCLick=()=>{
        inputRef.current.select()
       }
    return (
        <>
          <h2>Usando Use Ref</h2>
          <hr />
          <div>
             <input
             ref={inputRef}
             className="form-control mb-3"
                placeholder="Ingrese valores" 
                type="text" />
          </div>

          <button
            onClick={onCLick}
             className="btn btn-primary"
            >
            seleccionar
          </button>
        </>
    )
}