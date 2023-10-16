import {useState} from 'react';
import PropTypes from 'prop-types';

export const CounterApp=({value})=>{

    const [counter,setCounter]=useState(value)

    const  handleAdd=()=>{
        setCounter(counter + 1)
    }

    const handleSubtract=()=>{
        setCounter(counter-1);
    }

    const handleReset=()=>{
        setCounter(value)
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}> + </button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}> - </button>
        </>
    );
}

CounterApp.propTypes={
    'value':PropTypes.number.isRequired
}