 
import { useState } from "react"

 export const useCounter=(valorInicail=10)=>{
    const [counter,setCounter]=useState(valorInicail);

    const aumentar=(value=1)=>{
        setCounter(counter + value );
    }

    const reset=()=>{
        setCounter(valorInicail);
    }

    const disminuir=(value=1)=>{
        setCounter(counter - value);
    }

    return {
        counter,
        aumentar,
        reset,
        disminuir
    }
 }