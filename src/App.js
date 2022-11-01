import './App.css';
import {useState} from 'react';

function App() {

  const [pokemon, setPokemon] = useState([])

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=808&offset=0")
    .then((serverResponseObject) => {
      console.log(serverResponseObject)
      return serverResponseObject.json()
    })
    .then((theActualServerObject) => {
      console.log(theActualServerObject)
      setPokemon(theActualServerObject.results)
    })
    .catch((serverErrorObject) => {
      console.log("ERROR", serverErrorObject)
    })
  }

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  return (
    <div className="App">
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      {
        pokemon.map((onePokemon, index) => {
          return (
            <div>
                <li>{onePokemon.name}</li>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
