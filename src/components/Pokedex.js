import React from 'react';

const Pokedex = ({id, name, image, type, stats, weight, height}) => {
  const faceStyle = type + ' front';
  const backStyle = type + ' reserve';
  var flag = true;
  const flip = () => {
    if (flag) {
      flag = false;
      return (
        document.getElementById(id).className = type + ' front front-flip',
        document.getElementById(name).className = type + ' reserve reserve-flip'
      )
    }
    else if (!flag) {
      flag = true;
      return (
        document.getElementById(id).className = type + ' front',
        document.getElementById(name).className = type + ' reserve'
      )
    }
  }

  return (
    <div onClick={() => flip()} className="poke-container">
      <div id={id} className={faceStyle}>
        <div className='poke-id'><small>#0{id}</small></div>
        <img className='poke-image' src={image} alt={name} />
        <div className='poke-name'><strong>{name}</strong></div>
        <div className='poke-type'><small>Type: {type}</small></div>
        <div className='click-flip'><strong>Click to Flip</strong></div>
      </div>
      <div id={name} className={backStyle}>
        <div className='poke-hp'><strong>HP: {stats[0].base_stat}</strong></div>
        <div className='poke-attack'><strong>Attack: {stats[1].base_stat}</strong></div>
        <div className='poke-defense'><strong>Defense: {stats[2].base_stat}</strong></div>
        <div className='poke-height'><strong>height: {height}</strong></div>
        <div className='poke-weight'><strong>weight: {weight}</strong></div>
      </div>
    </div>
  )
}

export default Pokedex;