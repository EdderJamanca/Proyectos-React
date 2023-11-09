

// import React from 'react'

import { useEffect, useReducer, useState } from "react";
import { FornApp } from "./FornApp"
import { ListPaciente } from "./listPaciente"

let initialSatate=[];
let init=()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}
let fecha=new Date();

// const ferchaHoy = `${fecha.getFullYear()}-${(fecha.getMonth()+1).toString().padStart(2, '0')}-${fecha.getDate().toString().padStart(2, '0')}`;

export const Layout = () => {

    const [todos,setTodos]=useState(init);
    const [initForm,setInitForm]=useState({});

    const onNewTodo=(datos)=>{
        console.log('terminar parte',datos);
        const {id}=datos;
        let data;
        if(!id){

          let timestamp = fecha.getTime(); // Obtiene la marca de tiempo actual en 
          let aleatorio = Math.floor(Math.random() * 1000);
          const idUnico = `${timestamp}_${aleatorio}`;
  
           data={id:idUnico,...datos}
           setTodos((prevDatos)=>[...prevDatos,data]);
        }else {
            console.log('ingrese 1');
            data=todos.map(item=>{
              if(item.id==id){
              console.log('ingrese 2',item,datos);

              item={...datos}
              }
              console.log('ingrese 3',item);
              return item;
            })
            setTodos(data);
        }
       console.log('nuevo datos data',data);

         
    }
    const onDelete=(id)=>{

        let newDatov=todos.filter(item=>item.id!=id);
        
        setTodos(newDatov);

        localStorage.setItem('todos',JSON.stringify(newDatov))
        // localStorage.removeItem(newDatov);
    }
    const onEdit=(id)=>{
        let newDatov2=todos.filter(item=>item.id==id);
        setInitForm(newDatov2[0]);
        
    }

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

  return (
    <>
      <div className="container  pt-10 bg-slate-100 h-full">
            <h1 className="text-center text-4xl text-gray-900 leading-10 font-bold">Seguimiento Pacientes 
            <span className="text-indigo-600 px-1">Veterinaria</span></h1>
            <div className="grid grid-cols-2 gap-4 mt-5">
                <div>
                    <FornApp onNewTodo={onNewTodo} initForm={initForm}/>
                </div>
                <div>
                  <ListPaciente 
                    todos={todos}
                    onDelete={onDelete}
                    onEdit={onEdit}
                  />
                </div>
            </div>
      </div>

    </>
  )
}

// export default Layout
