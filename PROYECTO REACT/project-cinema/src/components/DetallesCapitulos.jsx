
function DetallesCapitulos (props){
    return(
        <>
       
            <p>{props.name}</p>

            <div className="fondo_negro">
                {props.episode}
            </div>

            DATE: {props.air_date}

        
        
        </>
    )
}

export default DetallesCapitulos;