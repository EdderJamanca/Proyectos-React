
export const ItemPaciente = ({datos,onEdit,onDelete}) => {
    const {id,nombre_mascota,nombre_propietario,email,fecha_alta,sintomas}=datos;

  return (
    <>
                <div className="shadow-lg bg-white w-2/3 rounded-lg px-5 py-5 mb-3">
                            <div className="mb-3">
                                <p  className="mb-3">
                                    <span className="font-bold pr-2">Nombre Mascota:</span>
                                    {nombre_mascota}
                                </p>
                                <p className="mb-3">
                                    <span className="font-bold pr-2">Nombre Propietario:</span>
                                    {nombre_propietario}
                                </p>
                                <p className="mb-3">
                                    <span className="font-bold pr-2">Email:</span>
                                   {email}
                                </p>
                                <p className="mb-3">
                                    <span className="font-bold pr-2">Alta:</span>
                                    {fecha_alta}
                                </p>
                                <p className="mb-3">
                                    <span className="font-bold pr-2">Observacion:</span>
                                    {sintomas}
                                </p>
                            </div>

                            <div className="mb-3 flex justify-between">
                                <button
                                   onClick={()=>onEdit(id)}
                                   type="submit"
                                   className="py-2 px-4 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-teal-400 focus:ring-opacity-75"
                                 >Editar
                                </button>
                                <button
                                    onClick={()=>onDelete(id)}
                                    type="submit"
                                    className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-red-400 focus:ring-opacity-75"
                                >
                                    Eliminar
                                </button>
                            </div>

                    </div>
    </>
  )
}


