import React from 'react'
import principal1 from '../assets/principal1.png'
import principal2 from '../assets/principal2.png'


function Home () {
    return(
        <>

            

            <div className='flex_home'>

                <img width={"400px"}  height={"300px"} src={principal1} />

                <h1 className='titulo_home'>MI PAGINA DE RICK AND MORTY</h1>
                
                <img width={"400px"} height={"300px"} src={principal2} />

            </div>

        </>



    )
}


export default Home ;