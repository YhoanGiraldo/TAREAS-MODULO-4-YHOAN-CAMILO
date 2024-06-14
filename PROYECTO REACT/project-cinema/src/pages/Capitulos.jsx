
import {useState, useEffect} from 'react'
import '../App.css'
import { useFetcher } from 'react-router-dom';
import DetallesCapitulos from '../components/DetallesCapitulos';


function Capitulos (){

    const [capitulos, setCapitulos] = useState([]);
    let [toque , setToques] = useState(2);

    useEffect(() =>{

        fetch(`https://rickandmortyapi.com/api/episode?page=${toque}`)
            .then((response) => response.json())
            .then((data) =>{
                setCapitulos(data.results)
                console.log("que trae")
                console.log(data.results)


            })

    }, [toque])

    let contadorId =() =>{
        setToques(toque + 1)
      };
      
      let decrementoId =() =>{
        if(toque <= 1){
          setToques(toque = 1);
        }else{
          setToques(toque - 1);
        }
      }


    return(
        <>
            <div className='display'>

                {capitulos.map((capitulos)=>(

                <div className='contenedor_capitulos'>

                    <DetallesCapitulos
                        key={capitulos.id}

                        name={capitulos.name}
                        episode={capitulos.episode}
                        air_date={capitulos.air_date}

                    />
                </div>
            

            ))
            }
            </div>

            <div className='botones'>

              <button className='adelanteAtras'  onClick={decrementoId}> ANTERIOR</button>
              <button  className='adelanteAtras' onClick={contadorId}>SIGUIENTE</button>
              
         </div>
        
        </>
    )
}

export default Capitulos;