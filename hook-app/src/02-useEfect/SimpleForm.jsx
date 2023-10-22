import { useEffect, useState } from "react";
import { Mensaje } from "./Mensaje";


export const SimpleForm =()=>{

    const [formState,setFormState]=useState({
        username:'strider2',
        email:'prueba@hotmail.com'
    })

    const {username,email}=formState;

    const onInputChange=({target})=>{
        const { name,value}=target;

        setFormState({
            ...formState,
            [name]:value
        })
    }

    useEffect(()=>{
        console.log('e ejecuto cuando el formulario a cambiado')
    },[formState])

    useEffect(()=>{
        console.log('e ejecuto cuando el email a cambiado')
    },[email])
    // [] cuando se quiere dispara una sola ves
    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input
             type="text"
             className="form-control mb-3"
             placeholder="Username"
             value={username}
             name="username"
             onChange={onInputChange}
             />

            <input
             type="email"
             className="form-control mb-3" 
             placeholder="Username@hotmla.com"
             value={email}
             name="email"
             onChange={onInputChange}
             />
        {
           (username === 'strider2') && <Mensaje />
        }
        </>

    )
}