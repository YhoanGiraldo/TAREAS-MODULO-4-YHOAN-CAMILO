
import React from 'react';

function name(props) {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return <h1 className='coloresNombres'>{props.name}</h1>;
}

export default name;