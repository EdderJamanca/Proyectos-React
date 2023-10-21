import { GifItem } from "./GifItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";

export const GifGrid=({category})=>{

  console.log('category new caracter',category);

    const {images,isLoading }=useFetchGifs(category);
    console.log('category new caracter',images,isLoading);

    return (
        <>
          <h3>{category}</h3>
          {
            isLoading && (<h2>Cargando....</h2>)
          }

          <div className="card-grid ">
                {
                    images.map((image)=>(
                        <GifItem 
                          key={image.id}
                          {...image}
                        />
                    ))
                }
          </div>
        </>
    )
}