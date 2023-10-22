import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";

const heavyStuff=(inicail=10)=>{
    for(let i;i<inicail;i++){
        console.log('Ahi vamos .....');
    }
    return `${inicail}`
}

export const MemorizeHook =()=>{
      const { counter,aumentar}=useCounter(10);

      const [show,setShow]=useState(true);

      const memorizeValue=useMemo(()=>heavyStuff(counter),[counter])

      return (
        <>
            <h1>Counter:<span>{counter}</span></h1>
            <hr />
            <h4>{memorizeValue}</h4>
            <button
                className="btn btn-primary"
                onClick={()=>aumentar()}
            >
                +1
            </button>

            <button
                className="btn btn-primary mx-1"
                onClick={()=>setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
      )
}