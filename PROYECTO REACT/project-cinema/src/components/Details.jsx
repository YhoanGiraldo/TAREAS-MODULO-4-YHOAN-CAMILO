

import React from 'react';

function Details(props) {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return (
    <div className='detallesTexto'>
        <p>
          <b>Genero:</b> {props.gender}
        </p>
        <p>
          <b>Estado:</b> {props.status}
        </p>
    </div>
  );
}
export default Details;