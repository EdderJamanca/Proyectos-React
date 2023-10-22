import { useEffect,useState } from "react"


export const Mensaje =()=>{

    const [coords,setCoords]=useState({x:0,y:0})
    useEffect(()=>{
        console.log('Mensaje Nomtado');
        const onMouseMove=({x,y})=>{
            console.log(x,y);
            setCoords({x,y});
        }

        window.addEventListener('mousemove',onMouseMove);

        return ()=>{
            console.log('Mensaje demonto')
            window.removeEventListener('mousemove',onMouseMove)
        }
    },[]);

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}