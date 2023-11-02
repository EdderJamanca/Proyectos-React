

// import React from 'react'

export const Layout = () => {
  return (
    <>
      <div className="container  pt-10 bg-slate-100 h-full">
            <h1 className="text-center text-4xl text-gray-900 leading-10 font-bold">Seguimiento Pacientes 
            <span className="text-indigo-600 px-1">Veterinaria</span></h1>
            <div className="grid grid-cols-2 gap-4 mt-5">
                <div>
                    <h3 className="text-center font-bold text-2xl text-gray-900">Seguimiento Pacientes</h3>
                    <p className="text-lg text-gray-900 font-bold text-center pt-5">Añade Pacientes y <span className="text-indigo-600">Administralos</span></p>

                    <div className="flex justify-center mt-5">
                        <form
                          className="shadow-lg bg-white w-2/3 rounded-lg px-5 py-3" 
                          action="">
                            <div className="mb-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900 mb-3">NOMBRE MASCOTA</label>
                                <input
                                    type="text"
                                    name="nombre_mascota"
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
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-center text-gray-900">No hay Pacientes</h3>
                    <p className="text-center font-bold text-lg text-gray-900 pt-5">Comienza agregando pacientes y <span className="text-indigo-600">aparecerán en este lugar</span></p>
                    <div className="flex justify-center mt-5">

                        <div className="shadow-lg bg-white w-2/3 rounded-lg px-5 py-3">

                            <div className="mb-3 flex justify-between">
                                <button
                                   type="submit"
                                   className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-blue-400 focus:ring-opacity-75"
                                 >Editar
                                </button>
                                <button
                                    type="submit"
                                    className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-blue-400 focus:ring-opacity-75"
                                >
                                    Eliminar
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
      </div>

    </>
  )
}

// export default Layout
