
import React from 'react'
import {Route, BrowserRouter as Router, Routes, Switch} from 'react-router-dom'
import {useState, useEffect} from 'react'
import './App.css'


import CharacterCard from './components/CharacterCard';





function App() {

const [CharactersList, setCharactersList] = useState([]);
let [toque, setToques] = useState(1);

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
}

  //-----------(Lo anterior es el listado completo por paginas de los personajes)----------------


  const [nameFilter, setNameFilter] = useState("")
  const [genderFilter, setGenderFilter] = useState("")

  
  const onSearch = (e) => {

    e.preventDefault()
    
    
    console.log(nameFilter)
    console.log(genderFilter)


    let urlAppi = "https://rickandmortyapi.com/api/character/?"

    if (nameFilter) urlAppi += `name=${nameFilter}&`;

    if(genderFilter) urlAppi += `gender=${genderFilter}&`

    urlAppi = urlAppi.slice(0, -1);

    fetch(urlAppi)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setCharactersList(data.results);
      
    })



    

    setCharactersList([]);

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


 
  
  return (

  <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      



        <div>
          <h1 className='titulo'>Personajes RICK AND MORTY</h1>

          
            <form onSubmit={onSearch}>

              <label> BUSQUEDA POR NOMBRE</label>
              <input   type="text"  value={nameFilter}   onChange={(e) =>  setNameFilter(e.target.value)} />

              <label> SELECCIONA GENERO</label>
              <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value) }>

                <option value=" "> NINGUNO </option>
                <option value="unknown"> UNKNOWN </option>
                <option value="male"> MALE </option>
                <option value="female"> FEMALE </option>

              </select>

              <button className='botonBuscar'  type='submit'>BUSCAR</button>


            </form> 
            
            








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

              <button className='adelanteAtras'  onClick={decrementoId}> ANTERIOR</button>
              <button  className='adelanteAtras' onClick={contadorId}>SIGUIENTE</button>
              
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
      
    </Routes>
  </Router>
    
  )
};
export default App
