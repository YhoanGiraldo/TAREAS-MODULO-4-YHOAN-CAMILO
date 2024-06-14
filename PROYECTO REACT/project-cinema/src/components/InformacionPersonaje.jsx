

function InformacionPersonaje (props){

    return(
        <>
        <div>        
                
            <h3 className="letraRoja">SU ID ES:</h3> {props.id}              
            
            <h3 className="letraRoja">CREADO:</h3> {props.created}               

            <h3 className="letraRoja"> UBICACION:</h3> {props.location}
              
            <h3 className="letraRoja">ORIGEN:</h3> {props.origin}               

        </div>      
        </>
    )
}

export default InformacionPersonaje