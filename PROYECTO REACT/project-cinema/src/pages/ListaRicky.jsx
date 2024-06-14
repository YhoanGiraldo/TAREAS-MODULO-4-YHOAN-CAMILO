

import {useState, useEffect} from 'react'
import '../App.css'

import CharacterCard from '../components/CharacterCard';





function ListaRicky() {

let [CharactersList, setCharactersList] = useState([]);
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

  }
  


  return (
    <> 
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
            
            






        <div className='botones'>

            <button className='adelanteAtras'  onClick={decrementoId}> ANTERIOR</button>
            <button  className='adelanteAtras' onClick={contadorId}>SIGUIENTE</button>

        </div>

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


      
    </>
   
    
  )
};

export default ListaRicky;