export const GifItem=({title,url,id})=>{
    return(
        <div className="card">
            <div className="img-card">
               <img src={url} alt={title} />
            </div>
            <p>{title}</p>
        </div>
    )
}