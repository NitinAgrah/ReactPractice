import React, { useState } from "react"
import axios from "axios"
import "./Pok.css"
const Pok = () => {
 const [num, setNum] = useState(1)
 const [name, setName] = useState()
 const [moves, setMoves] = useState()
 const [error, setError] = useState(null)

 const fetchData = async () => {
  try {
   setError(null)
   const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
   setName(res.data.name)
   setMoves(res.data.moves.length)
  } catch (error) {
   setError("Pokemon not found!")
   setName(null)
   setMoves(null)
  }
 }

 return (
  <>
   {/* Input field with className */}
   <input
    type="number"
    value={num}
    onChange={(event) => setNum(event.target.value)}
    className="pokemon-input"
   />
   {/* Button with className */}
   <button onClick={fetchData} className="fetch-button">
    Fetch
   </button>

   {/* Display the selected Pokemon's details if available */}
   {name && <p className="pokemon-info">Your name: {name}</p>}
   {moves && <p className="pokemon-info">Moves: {moves}</p>}

   {/* Display error message if Pokemon is not found */}
   {error && <p className="error-message">{error}</p>}
  </>
 )
}

export default Pok
