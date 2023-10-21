import { useState } from "react"

export const CounterApp=()=>{

    const [count,setCount]=useState({
        counter1:20,
        counter2:30,
        counter4:22
    });

    const {counter1,counter2,counter4}=count;

    return (<>
          <h1>CountApp </h1>
          <h3>{counter1}</h3>
          <h3>{counter2}</h3>
          <h3>{counter4}</h3>

          <hr />
          <button 
          className="btn btn-success btn-md"
          onClick={()=>(setCount({...count,counter1:counter1+1}))}
          >+1</button>
    </>);
}