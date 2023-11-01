import { useState } from "react"


export const useForm=(valueForm)=>{

    const [formState,setFormState]=useState(valueForm);

    const onInputChange=({target})=>{
        const { name,value}=target;

        setFormState({
            ...formState,
            [name]:value
        })
    }

    const resetOnForm=()=>{
        setFormState(valueForm);
    }

    return {
        formState,
        onInputChange,
        resetOnForm,
        ...formState
    }
}