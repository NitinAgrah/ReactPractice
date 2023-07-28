import React, { useState } from "react"
import Simage from "./Simage"
import "./styles.css" // Import the external CSS file

const Image = () => {
 const [img, setImg] = useState()

 const inputEvent = (event) => {
  const data = event.target.value
  console.log(data)
  setImg(data)
 }

 return (
  <div className="container">
   <input
    onChange={inputEvent}
    type="text"
    placeholder="Enter image search"
    value={img}
   />
   <Simage name={img} />
  </div>
 )
}

export default Image
