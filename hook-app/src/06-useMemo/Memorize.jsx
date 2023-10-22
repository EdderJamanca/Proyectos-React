import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";

export const Memorize =()=>{
      const { counter,aumentar}=useCounter(10);

      const [show,setShow]=useState(true);

      return (
        <>
            <h1>Counter:<Small value={counter} /></h1>
            <hr />
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