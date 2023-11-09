import { ItemPaciente } from "./ItemPaciente";


export const ListPaciente =({todos=[],onDelete,onEdit})=>{


 console.log('todos',todos);

    return (<>
                    <h3 className="text-2xl font-bold text-center text-gray-900">No hay Pacientes</h3>
                    <p className="text-center font-bold text-lg text-gray-900 pt-5">Comienza agregando pacientes y <span className="text-indigo-600">aparecerán en este lugar</span></p>
                    <div className="flex flex-col mt-5 ">

                        {
                            todos.map(item=>(
                                <ItemPaciente
                                  key={item.id}
                                  datos={item}
                                  onDelete={onDelete}
                                  onEdit={onEdit}
                                 />
                            ))
                        }

                    </div>
    </>)

}