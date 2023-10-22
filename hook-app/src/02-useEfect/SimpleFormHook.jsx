import { useForm } from "../hooks/useForm"

export const SimpleFormHook=()=>{

    const {formState,onInputChange,username,email,password}=useForm({
        username:'',
        email:'',
        password:''
    })

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

            <input
             type="password"
             className="form-control mb-3" 
             placeholder="Ingres su contrseña"
             value={password}
             name="password"
             onChange={onInputChange}
             />
        </>
    )
}