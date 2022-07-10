import React from 'react';

const Pokedex = ({id, name, image, type}) => {
  const pokeStyle = type + ' poke-container';

  return (
      <div className={pokeStyle}>
        <div className='poke-id'><small>#0{id}</small></div>
        <img className='poke-image' src={image} alt={name} />
        <div className='poke-name'><strong>{name}</strong></div>
        <div className='poke-type'><small>Type: {type}</small></div>
      </div>
  )
}

export default Pokedex;