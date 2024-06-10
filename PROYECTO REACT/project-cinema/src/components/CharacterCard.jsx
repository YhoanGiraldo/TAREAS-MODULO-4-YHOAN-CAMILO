import React from 'react';
import Name from './name';
import Image from './Image';
import Details from './Details';

function CharacterCard(props) {

  return (
    <div>
      {/* Nombre de el personaje */}
      <Name name={props.name}/>
      {/* Imagen de el personaje */}
      <Image url={props.image} />
      {/* Detalles de el personaje */}
      <Details 
        gender={props.gender} 
        status={props.status} 
      />
    </div>
  );
}

export default CharacterCard;