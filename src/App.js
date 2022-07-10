import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Pokedex from "./components/Pokedex";

const App = () => {
  const PokeURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
  let [pokes, setPokes] = useState([])
  let [morePokes, setMorePokes] = useState(PokeURL);
  const getPokemons = async () => {

    const res = await fetch(morePokes);
    const data = await res.json();

    setMorePokes(data.next);

    const createPokeObject = (results) => {
      return (
        results.forEach(async (poke) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`);
        const data = await res.json();
        setPokes(currentArr => [...currentArr, data]);
      }));
    };

    createPokeObject(data.results);
    const sortPokes = () => {
      return (pokes.sort((a, b) => a.id - b.id));
    };
    sortPokes();
  }

  const handleMorePokes = () => {
    getPokemons();
  }

  useEffect(() => {
    getPokemons();
  }, [])


  return (
    <div className="all-container">
      <div className="title">
        <h2>Pokédex</h2>
      </div>
      <br />
      <hr className='hr-shadow' />
      <div className="pokedex-container">
        <Routes>
          <Route path='/' element={
            pokes.map((poke, index) => {
              return <Pokedex
                id={poke.id}
                name={poke.name}
                image={poke.sprites.other.dream_world.front_default}
                type={poke.types[0].type.name}
                key={index}
              />
            })
          }/>
        </Routes>
      </div>
      <div className="button">
        <button onClick={() => handleMorePokes()} className={"btn btn-outline-danger btn-lg"} type="button">More Pokés</button>
      </div>
    </div>
  );
}

export default App;