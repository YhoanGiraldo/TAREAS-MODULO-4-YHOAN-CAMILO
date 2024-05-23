
import './App.css'

function App() {
 

  return (
    <>
      <div className='titulo'>
        <h1>
          
          MIS 2 PELICULAS MAS VISTAS
        
        </h1>
      </div>

      <div className='descripcion'>

        <h2>DEADPOOL</h2>

        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Deadpool%2C_Georgia_Viaduct%2C_Vancouver%2C_April_6_2015_-_3.jpg" 
        id='fotoDeadPool' />
        <p>

          La película sigue a Wade Wilson, un mercenario con un retorcido 
          sentido del humor que después de ser sometido a un experimento que 
          lo deja con deformaciones físicas y nuevas habilidades mutantes de regeneración, 
          persigue al hombre que casi destrozó su vida.
        
        </p>
      </div>


      <div className='descripcion2'>

        <h2>LOS SIMPSON</h2>

        <img src="https://pics.filmaffinity.com/Los_Simpson_La_pelaicula-460718654-large.jpg" 
        id='fotoSimpson' />


        <p>

        Homer debe salvar al mundo de una catástrofe que él mismo ha provocado. 
        Todo comienza con Homer, su nueva mascota, un cerdo, y un silo lleno de 
        excrementos que tiene una fuga, una combinación que desencadena un desastre 
        distinto a todo lo que Springfield haya experimentado jamás.
        
        </p>
      </div>
     
    </>
  )
}

export default App
