import { useState } from "react";

export const useFrom=(valorIncial)=>{

    const [fromState,setFromState]=useState(valorIncial);

    const onInputChange=({target})=>{
        const {name,value}=target;

        setFromState({
            ...fromState,
            [name]:value
        })
    }

    const resetOnForm=()=>{
        console.log('ingrese al reset');
        setFromState(valorIncial);
    }

    const editarFrom=(datos)=>{
        setFromState(datos);
    }

    return {
        fromState,
        onInputChange,
        editarFrom,
        resetOnForm,
        ...fromState
    }
}