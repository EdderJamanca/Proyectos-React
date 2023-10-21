import { useState } from "react";

export const AgregarCategoria=({onNuevaCategoria})=>{

    const [inputValue,setInputValue]=useState('');

    const onInputChange=({target})=>{
        setInputValue(target.value);
    }

    const onSubmit =(event)=>{
        event.preventDefault();

        if(inputValue.trim().length <=1) return;
     
        console.log('event.value',event.target.value);
        onNuevaCategoria(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Busca gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );

}