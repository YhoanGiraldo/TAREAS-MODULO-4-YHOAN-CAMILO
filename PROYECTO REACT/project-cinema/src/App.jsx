

import React from 'react'
import './App.css'
import CharacterCard from './components/CharacterCard';
import ricky from "./assets/rickAndMorty.png"
import {useState, useEffect} from 'react'




function App() {

const [CharactersList, setCharactersList] = useState([]);

const [toque, setToques] = useState(1);

useEffect(() => {

  fetch(`https://rickandmortyapi.com/api/character/?page=${toque}`)
        .then((response) => response.json())
        .then((data) => {     

            setCharactersList(data.results)
            console.log(data.results); 
            }
          );

}, [toque])

let contadorId =() =>{
  setToques(toque + 1)
};

let decrementoId =() =>{
  if(toque <= 0){
    setToques(toque = 1);
  }else{
    setToques(toque - 1);
  }
















/*
//____________________________________________________________________(TAREA DE 1 PERSONAJE)____________________________________________
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const [resultadoAppi, setResultadoAppi] = useState ("")

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
         console.log(result)
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
//____________________________________________________________________(TAREA DE 1 PERSONAJE)______________________________________________
*/

}
 
  
  return (

  <>

  <div>
    <h1 className='titulo'>Personajes RICK AND MORTY</h1>

    <div className='display'>
      {
        CharactersList.map((CharactersList) => (
          
        <div className='contenedorMayor'>

          <CharacterCard

          key={CharactersList.id}
        
          name={CharactersList.name}
          image={CharactersList.image}
          gender={CharactersList.gender}
          status={CharactersList.status}

          />
        </div>
        ))
      }
  
    </div>

  </div>
  <div className='botones'>

        <button onClick={decrementoId}> ANTERIOR</button>
        <button onClick={contadorId}>SIGUIENTE</button>
        
      </div>















  {/* //________________________(TAREA DE 1 PERSONAJE)_______________________
    <>
      <div className='contenedorMayor'>
        <h1>Personajes de Rick and morty</h1>
        
        <CharacterCard 
        
          name={resultadoAppi.name}
          image={resultadoAppi.image}
          gender={resultadoAppi.gender}
          status={resultadoAppi.status}
        />
      </div>

      <div className='botones'>

        <button onClick={decrementoId}> ANTERIOR</button>
        <button onClick={contadorId}>SIGUIENTE</button>
        
      </div>
    </>
      //________________________(TAREA DE 1 PERSONAJE)_______________________
  */}
  </>
    
  )
};
export default App
