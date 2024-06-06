
import {useState, useEffect} from 'react'
import './App.css'
import Name from './components/name'
import Image from './components/Image'
import Details from './components/Details'
import CharacterCard from './components/CharacterCard'
import React from 'react'



function App() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  let [toque, setToques] = useState(1)
  
    useEffect( () => {
      // Este useEffect se ejecutará una única vez cuando el componente se monte
      fetch(`https://rickandmortyapi.com/api/character/${toque}`)

      .then((response) => response.json())
      .then((result) =>{

        
         setName(result.name)
         setImage(result.image)
         setGenre(result.gender)
         setStatus(result.status)
         console.log(result)

      }
      );
  }, [toque]);

 

  let contadorId =() =>{

    setToques(toque + 1)

  }

  let decrementoId =() =>{

    if(toque <= 0){

    setToques(toque = 1);

    }else{

      setToques(toque - 1);

    }

  }
 
 

  

  return (
    <>
      <div className='contenedorMayor'>
        <h1>Personajes de Rick and morty</h1>
        
        <CharacterCard 
        
          name={name}
          image={image}
          genre={genre}
          status={status}

        />

        
      </div>

      <div className='botones'>

        <button onClick={decrementoId}> ANTERIOR</button>
        <button onClick={contadorId}>SIGUIENTE</button>
        
      </div>


    </>

    
  )

}
export default App
