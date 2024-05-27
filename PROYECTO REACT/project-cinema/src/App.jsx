import './App.css'
import deadpool from "./assets/deadpool2.jpg"
import simpson from "./assets/simpson.jpg"
import Title from './components/Title'
import Image from './components/Image'
import Details from './components/Details'



function App() {
 

  return (
    <div className='contenedorMayor'>

      <Image  url={deadpool}/>
      

      <div className='titulo'>
        <Title title="Deadpool"/>
      </div>

      <div className='detalles'>
        <Details genre=" Niños +12" status="Artista vivo" />
      </div>
      
    </div>
  )
}

export default App
