// import { useState } from "react"
import { useCounter } from "../hooks/useCounter";

export const CounterApp=()=>{

    const {counter,aumentar,reset,disminuir}=useCounter();
    // const [count,setCount]=useState({
    //     counter1:20,
    //     counter2:30,
    //     counter4:22
    // });

    // const {counter1,counter2,counter4}=count;

    return (<>
            <h1>counter App {counter}</h1>
          {/* <h1>CountApp </h1>
          <h3>{counter1}</h3>
          <h3>{counter2}</h3>
          <h3>{counter4}</h3> */}

          <hr />
          <button 
          className="btn btn-success btn-md mx-1"
          onClick={()=>aumentar(2)}
          >+1</button>
          <button
            className="btn btn-success btn-md mx-1"
            onClick={reset}
          >Reset</button>
          <button
            className="btn btn-success btn-md mx-1"
            onClick={()=>disminuir(2)}
          >-1</button>
    </>);
}