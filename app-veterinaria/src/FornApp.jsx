import { useEffect, useState } from "react";
import { useFrom } from "./hook/useFrom";
import { Error } from './Error'
let fecha=new Date();

const ferchaHoy = `${fecha.getFullYear()}-${(fecha.getMonth()+1).toString().padStart(2, '0')}-${fecha.getDate().toString().padStart(2, '0')}`;

export const FornApp=({onNewTodo,initForm})=>{


    const {fromState,onInputChange,editarFrom,resetOnForm,nombre_mascota,nombre_propietario,
        email,fecha_alta,sintomas}=useFrom({
            nombre_mascota:'',
            nombre_propietario:'',
            email:'',
            fecha_alta:ferchaHoy,
            sintomas:''
        });

    const [isError, setIsError] = useState(false);
    const [mensajeError, setMensajeError] = useState([]);

    const onFromSubmit=(event)=>{
        event.preventDefault();
        setIsError(false);
        if( typeof nombre_mascota=='undefined' || nombre_mascota.length<=1 ){ 
            setMensajeError((prevEstado)=>[...prevEstado,'Nombre Mascota es requerido']); 
            
        };
        if( typeof nombre_propietario=='undefined' || nombre_propietario.length<=1){
  
            setMensajeError((prevEstado)=>[...prevEstado,'Nombre del propietario es requerido']); 
         
        };
        if(typeof email=='undefined' || email.length<=1){
            setMensajeError((prevEstado)=>[...prevEstado,'Email es requerido.']); 
         
        };
        if(typeof fecha_alta=='undefined' || fecha_alta.length<=1){ 
            setMensajeError((prevEstado)=>[...prevEstado,'Fecha Alta es requerido.']); 
      
        };
    
        if(typeof sintomas=='undefined' || sintomas.length<=1){
            
            setMensajeError((prevEstado)=>[...prevEstado,'Fecha Alta es requerido.']);  
           
        };

        if(typeof nombre_mascota=='undefined' || nombre_mascota.length<=1 ||
           typeof nombre_propietario=='undefined' || nombre_propietario.length<=1 ||
           typeof email=='undefined' || email.length<=1 ||
           typeof fecha_alta=='undefined' || fecha_alta.length<=1 ||
           typeof sintomas=='undefined' || sintomas.length<=1
        )
        {
        console.log('no ingreso in',isError);

            setIsError(true);
        }

        console.log('ingresar a los valores',isError);
        if(isError) return;

        onNewTodo(fromState);
        resetOnForm();
    }

    useEffect(()=>{
       
        if(!initForm) return;
        editarFrom(initForm);
    },[initForm])

   const  deleteError=(mensaje)=>{
        if(!mensaje) return;
       let datos= mensajeError.filter(msj=>msj!=mensaje)
        setMensajeError(datos);
          
    }


    return (
        <>
                    <h3 className="text-center font-bold text-2xl text-gray-900">Seguimiento Pacientes</h3>
                    <p className="text-lg text-gray-900 font-bold text-center pt-5">Añade Pacientes y <span className="text-indigo-600">Administralos</span></p>

                    <div className="flex justify-center mt-5">
                        <form
                          onSubmit={onFromSubmit}
                          className="shadow-lg bg-white w-2/3 rounded-lg px-5 py-3" 
                          action="">

                            {
                                ( isError && <Error mensajeError={mensajeError} deleteError={deleteError} />)
                            }
                            <div className="mb-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900 mb-3">NOMBRE MASCOTA</label>
                                <input
                                    type="text"
                                    name="nombre_mascota"
                                    value={nombre_mascota}
                                    onChange={onInputChange}
                                    placeholder="Nombre de la Mascota"
                                    className="block flex-1 border-1 w-full
                                    shadow-sm ring-1 ring-gray-300 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                 />
                            </div>
                            <div className="mb-3">
                            <label className="block text-sm font-medium loading-6 text-gray-900 mb-3">
                                NOMBRE PROPIETARIO
                            </label>
                            <input
                                type="text"
                                name="nombre_propietario"
                                value={nombre_propietario}
                                onChange={onInputChange}
                                placeholder="Nombre del propietario"
                                className="block flex-1 border-1 w-full
                                shadow-sm ring-1 ring-gray-300 py-1.5
                                pl-1 text-gray-900 placeholder:text-gray-0 focus:ring-0 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                  className="block text-sm font-medium loading-6 text-gray-900 mb-3"
                                 >
                                    EMAIL
                                </label>
                                <input
                                type="emial"
                                name="email"
                                value={email}
                                onChange={onInputChange}
                                placeholder="Email Contacto Propietario" 
                                className="block flex-1 border-1 w-full shadow-sm ring-1 ring-gray-300 py-1.5 pl-1 text-gray-900 placeholder:text-gray-0 focus:ring-0 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                  className="block text-sm
                                  font-medium loading-6 text-gray-900 mb-3"
                                   >
                                    ALTA
                                </label>
                                <input
                                type="date"
                                name="fecha_alta"
                                value={fecha_alta}
                                onChange={onInputChange}
                                placeholder="dd/mm/aaaa"
                                className="block flex-1 border-1 w-full shadow-sm ring-1 ring-gray-300 py-1.5 pl-1 text-gray-900 placeholder:text-gray-0 focus:ring-0 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                  className="block text-sm font-medium loading-6
                                  text-gray-900 mb-3"
                                 >
                                   SINTOMAS
                                </label>
                                <textarea 
                                    name="sintomas"  
                                    cols="30" 
                                    rows="3"
                                    value={sintomas}
                                    onChange={onInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                >

                                </textarea>
                            </div>
                            <div className="mb-3">
                                 <button
                                    type="submit"
                                    className="py-2 px-4 w-full bg-blue-500 text-white font-semibold rounded-lg shadow-md
                                    hover:bg-blue-700 focus:outline-none focus:ring-blue-400 focus:ring-opacity-75"
                                 >
                                    AGREGAR
                                 </button>
                            </div>
                        </form>
                    </div>
        </>
    )
}