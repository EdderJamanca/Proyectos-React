// SE INSTALA EL PROPTYOPES ---- > npm install prop-types
import PropTypes from 'prop-types';

export const  App =({titulo,subtitulo})=>{
    return (
    <>
        <h1>{titulo}</h1>
        <hr />
        <h5>{subtitulo}</h5>
    </>
    )
}

App.propTypes={
   'titulo':PropTypes.string.isRequired,
   'subtitulo':PropTypes.string.isRequired
};

App.defaultProps={
    'titulo':"No hay Titulo",
    'subtitulo':"No hay sub Titulo"
}