import { useState } from "react"
import {AgregarCategoria} from './components/AgregarCatergoria';
import { GifGrid } from "./components/GifGrid";

export const GifApp =()=>{

    const [categoria,setCategoria]=useState(['One Punch','Dragon Ball']);

    const onAddCategoria=(newCategoria)=>{
        console.log('obtener datos nuevos',newCategoria);

        if( categoria.includes(newCategoria)) return;
        
        setCategoria([newCategoria,...categoria]);
    }
    return (
        <>
        {/* titulo */}
           <h1>Gif App</h1>
            <AgregarCategoria 
              onNuevaCategoria={event=>onAddCategoria(event)}
            />
            <ol>
                {
                    categoria.map(category=>(
                        <GifGrid
                           key={category}
                           category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
} 