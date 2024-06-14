
import {useState, useEffect} from 'react'
import '../App.css'

import CharacterCard from '../components/CharacterCard';
import InformacionPersonaje from '../components/InformacionPersonaje';



function IndividualPersonaje (){
    
    const [name, setName] = useState([]);
    const [image, setImage] = useState([]);
    const [gender, setGender] = useState([]);
    const [status, setStatus] = useState([]);

    const [origin, setOrigin] = useState([])
    const [location, setLocation] = useState([])

    const [resultadoAppi, setResultadoAppi] = useState ([])

    let [toque, setToques] = useState(1)
  
    useEffect( () => {
      // Este useEffect se ejecutará una única vez cuando el componente se monte
      fetch(`https://rickandmortyapi.com/api/character/${toque}`)

      .then((response) => response.json())
      .then((result) =>{

        setResultadoAppi(result)
        setName(result.name)
        setImage(result.image)
        setGender(result.gender)
        setStatus(result.status)

        setLocation(result.location)
        setOrigin(result.origin)
         console.log("que trae")
         
         console.log( result)
      }
      );
  }, [toque]);

  let contadorId =() =>{
    setToques(toque + 1)
  };

  let decrementoId =() =>{
    if(toque <= 0){
      setToques(toque = 1);
    }else{
      setToques(toque - 1);
    }
  };


    return(
        <>
        <div className='flex_individual'>

            <div className='contenedorMayor'>
              <h1>PPERSONAJE</h1>
              
              <CharacterCard 
              
                name={resultadoAppi.name}
                image={resultadoAppi.image}
                gender={gender}
                status={status}

              />
            </div>

            <div className='informacionPersonaje'>

                <InformacionPersonaje 
                
                id={resultadoAppi.id}
                created={resultadoAppi.created}
                location={location.name}
                origin={origin.name}
                
                />
            </div>
        </div>

            

            <div className='botones'>

              <button onClick={decrementoId}> ANTERIOR</button>
              <button onClick={contadorId}>SIGUIENTE</button>
              
            </div>
        
        
        
        </>
    )
}

export default IndividualPersonaje;